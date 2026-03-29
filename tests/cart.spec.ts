import { test, expect } from '@playwright/test';
import { loginAsStandardUser } from '../utils/loginHelper';
import { InventoryPage } from '../pages/inventoryPage';

test('Add item to cart and verify cart page @smoke @regression', async ({ page }) => {
  const inventory = new InventoryPage(page);

  await loginAsStandardUser(page);

  await inventory.addFirstItemToCart();

  // ✅ badge validation (advanced)
  const badgeVisible = await inventory.isCartBadgeVisible();
  expect(badgeVisible).toBeTruthy();

  await inventory.goToCart();

  // ✅ URL validation
  await expect(page).toHaveURL(/cart/);

  // ✅ UI validation
  await expect(page.locator('.cart_item')).toBeVisible();
});