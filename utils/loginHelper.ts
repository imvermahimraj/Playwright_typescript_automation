import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export async function loginAsStandardUser(page: Page) {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
}