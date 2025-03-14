import { test, expect, chromium } from '@playwright/test';

test('Login To Naukri And Update Profile', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // ✅ Set custom headers here
  await context.setExtraHTTPHeaders({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  });

  const page = await context.newPage();


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
 

