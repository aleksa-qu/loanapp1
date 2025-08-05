import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route('**/api/loan/calculate', async (route) => {
      const mockResponse = {
        amount: 1000,
        period: 24,
        monthlyPayment: '43.87 €',
      };

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockResponse),
      });
    });

    await page.route('**/api/login', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          token: 'mocked-jwt-token',
        }),
      });
    });

    await page.route('**/api/loan/confirm', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          message: 'Loan confirmed!',
        }),
      });
    });

    await use(page);
  },
});

export { expect } from '@playwright/test';
