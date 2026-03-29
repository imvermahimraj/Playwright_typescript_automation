import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

test('Full user journey flow (demo test)', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  // Step 1: Invalid login
  await login.navigate();
  await login.login('invalid_user', 'wrong_password');

  await expect(page.locator('[data-test="error"]')).toBeVisible();

  // Step 2: Valid login
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);

  // Step 3: Add to cart
  await inventory.addFirstItemToCart();
  await inventory.goToCart();

  await expect(page.locator('.cart_item')).toBeVisible();

  // Step 4: Checkout
  await page.click('#checkout');

  await page.fill('#first-name', 'Himraj');
  await page.fill('#last-name', 'Verma');
  await page.fill('#postal-code', '411001');

  await page.click('#continue');
  await page.click('#finish');

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});