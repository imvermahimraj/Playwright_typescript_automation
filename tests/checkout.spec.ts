import { test, expect } from '@playwright/test';
import { loginAsStandardUser } from '../utils/loginHelper';
import { InventoryPage } from '../pages/inventoryPage';

test('Complete checkout flow @regression', async ({ page }) => {
  const inventory = new InventoryPage(page);

  await loginAsStandardUser(page);

  await inventory.addFirstItemToCart();
  await inventory.goToCart();

  await page.click('#checkout');

  await page.fill('#first-name', 'Himraj');
  await page.fill('#last-name', 'Verma');
  await page.fill('#postal-code', '411001');

  await page.click('#continue');

  await expect(page.locator('.summary_info')).toBeVisible();

  await page.click('#finish');

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});