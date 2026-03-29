import { Page } from '@playwright/test';
import { config } from '../config/env';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto(config.baseUrl);
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}