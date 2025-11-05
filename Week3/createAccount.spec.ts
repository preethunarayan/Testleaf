import { test, expect } from '@playwright/test'

test('Create Salesforce account', async ({ page }) => {

  await page.goto("https://login.salesforce.com/")
  await page.waitForTimeout(3000)

  //  Enter username and pwd using getByLabel
  await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com') // replace with valid username
  await page.getByLabel('Password').fill('TestLeaf@2025') // replace with valid password
  await page.locator("//input[@id='Login']").click()
await page.waitForTimeout(3000)
  // Verify the title and URL of the page
  await expect(page).toHaveTitle(/Home|Salesforce/i)
  await expect(page).toHaveURL(/lightning/)

  // Click App Launcher using class locator
await page.locator('.slds-icon-waffle').click();

// Wait for App Launcher dialog to appear

await expect(page.getByRole('dialog', { name: 'App Launcher' })).toBeVisible();

// Click the correct View All button inside App Launcher
await page.locator('(//button//span[text()="View All"])[1]').click()

await page.waitForTimeout(3000)


// Correct placeholder text and fill value
await page.getByPlaceholder('Search apps and items...').fill('Service')

  // Click Service using index-based XPath
  await page.locator('(//mark[text()="Service"])[1]').click()

  // Click Accounts using attribute-based CSS selector
  await page.locator('a[title="Accounts"]').click()

  // Click New using getByRole
  await page.getByRole('button', { name: 'New' }).click();

  //Enter Account Name using attribute-based CSS selector
  await page.locator('input[name="Name"]').fill('TechVision Pvt Ltd')

  // Click Save button using XPath
  await page.locator('//button[@name="SaveEdit"]').click()

  // Verify toast message displayed
  const toastMessage = page.locator('//span[contains(@class,"toastMessage")]')
  await expect(toastMessage).toBeVisible()
  const messageText = await toastMessage.textContent()
  console.log('Toast Message:', messageText)

  // Final assertion
  await expect(messageText).toContain('TechVision Pvt Ltd')

  console.log('account successfully created and verified!')
})
