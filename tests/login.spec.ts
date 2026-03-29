import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Valid login should navigate to inventory page @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});

test('Invalid login should show error message @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('invalid_user', 'wrong_password');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});