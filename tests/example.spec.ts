import { test, expect } from '@playwright/test';

test('Login To Naukri And Update Profile', async ({ page }) => {
  await page.goto('https://www.naukri.com/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).click();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).fill('tvssbhagavan2002@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('G');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Govindha@81');
  await page.getByText('Show', { exact: true }).click();
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Govindha@18');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.getByRole('link', { name: 'View profile' }).click();
  await page.getByRole('emphasis').filter({ hasText: 'editOneTheme' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('B');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('Bhagavan ');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('Bhagavan T');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('Bhagavan Tulasi');
  await page.getByRole('textbox', { name: 'Select year' }).click();
  await page.getByRole('link', { name: '2 Years', exact: true }).click();
  await page.getByRole('textbox', { name: 'Select month' }).click();
  await page.getByRole('link', { name: '2 Months' }).click();
  await page.getByRole('textbox', { name: 'Eg.' }).click();
  await page.getByText('15 Days or less', { exact: true }).click();
});
 

