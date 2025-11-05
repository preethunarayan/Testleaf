import { test, expect } from '@playwright/test'

test('Edit Lead', async ({ page }) => {
 
  await page.goto('http://leaftaps.com/opentaps/control/main')
   await page.locator('#username').fill('Demosalesmanager')
  
  await page.locator('#password').fill('crmsfa')
  
  await page.locator('.decorativeSubmit').click()
  
  await page.locator('text=CRM/SFA').click()
 await page.getByRole('link', { name: 'Leads' }).click()

  await page.getByRole('link', { name: 'Find Leads' }).click()
  // Enter name in 3rd field on the page
  const firstNameInput = page.locator('[name="firstName"]').nth(2)
  await firstNameInput.fill('Preethu')

  await page.getByRole('button', { name: 'Find Leads' }).click()

  // click the first Lead ID
  const firstResult = page.locator('.x-grid3-cell-inner.x-grid3-col-partyId a')
  await firstResult.first().click()

  // Click Edit
  await page.getByRole('link', { name: 'Edit' }).click()

  // 10. Edit Company Name
  const companyNameInput = page.locator('#updateLeadForm_companyName');
  await companyNameInput.fill('zowork Pvt Ltd');

  // 11. Edit Annual Revenue
  const annualRevenueInput = page.locator('#updateLeadForm_annualRevenue');
  await annualRevenueInput.fill('1000000');

  // 12. Edit Department
  const departmentInput = page.locator('#updateLeadForm_departmentName');
  await departmentInput.fill('Quality Assurance');

  // 13. Enter Description
  const descriptionInput = page.locator('#updateLeadForm_description');
  await descriptionInput.fill('Edited lead details for verification.');

  // 14. Click Update
  await page.getByRole('button', { name: 'Update' }).click();

  // 15. Verify edited fields
  const companyNameText = await page.locator('#viewLead_companyName_sp').textContent()
  const departmentText = await page.locator('#viewLead_departmentName_sp').textContent()
  const descriptionText = await page.locator('#viewLead_description_sp').textContent()

  // 16. Assertions
  await expect(companyNameText).toContain('zowork Pvt Ltd')
  await expect(departmentText).toBe('Quality Assurance')
  await expect(descriptionText).toContain('Edited lead details')

  console.log('Lead details successfully updated and verified!')
})
