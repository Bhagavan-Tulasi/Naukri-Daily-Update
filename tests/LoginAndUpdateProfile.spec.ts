import { test, expect } from '@playwright/test';

test('Login To Naukri And Update Profile', async ({ page }) => {
  const loginButton=page.locator('//a[@id="login_Layer"]')
  const userNameInputBox=page.locator('//input[contains(@placeholder,"Email ID / Username")]')
  const userPasswordInputBox=page.locator('//input[contains(@placeholder,"password")]')
  const loginSubmitButton=page.locator('//button[contains(@class,"loginButton")]')
  const viewProfileButton=page.locator('//a[@href="/mnjuser/profile"]')
  const profileEditButton=page.locator('//em[@class="icon edit "]')
  const basicDetailsName=page.locator('//input[@id="name"]')
  const basicDetailsYears=page.locator('//input[@id="exp-years-droopeFor"]')
  const basicDetailsMonths=page.locator('//input[@id="exp-months-droopeFor"]')
  const basicDetailsSaveButton=page.locator('//button[@id="saveBasicDetailsBtn"]')
  await page.goto('https://www.naukri.com/');
  await loginButton.click()
  await userNameInputBox.fill('tvssbhagavan2002@gmail.com')
  await userPasswordInputBox.fill('Govindha@18')
  await loginSubmitButton.click()
  await viewProfileButton.click()
  await profileEditButton.click()
  await basicDetailsName.fill('Bhagavan Tulasi')
  await basicDetailsYears.fill('2 Years')
  await basicDetailsMonths.fill('2 Months')
  await basicDetailsSaveButton.click()

});
 

