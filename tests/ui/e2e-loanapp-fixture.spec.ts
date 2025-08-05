import { test, expect } from '../fixtures/loanapp.fixture';
import { LoanPage } from '../pages/loan-page';
import { LoanDetailPage } from '../pages/loandetail-page';

test('Mocked backend returns correct monthly payment', async ({ page }) => {
  const loanPage = new LoanPage(page);
  await loanPage.openLoanPage();

  await loanPage.amountInput.fill('1000');
  await loanPage.setPeriodOption('24');

  await expect(loanPage.monthlyAmountText).toHaveText('43.87 €');
});

test('User can calculate, login and confirm loan with mocked backend', async ({
  page,
}) => {
  const loanPage = new LoanPage(page);
  await loanPage.openLoanPage();
  await loanPage.amountInput.fill('1000');
  await loanPage.setPeriodOption('24');

  await expect(loanPage.monthlyAmountText).toHaveText('43.87 €');

  await loanPage.login();

  const loanDetailPage = new LoanDetailPage(page);
  await loanDetailPage.continueButton2.click();
  await loanDetailPage.successOkButton.click();

  await expect(loanPage.mainPageHeadingText).toBeVisible();
});
