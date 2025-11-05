import test, { expect } from '@playwright/test'



test("Create a Lead", async ({ page }) => {
  
  await page.goto('http://leaftaps.com/opentaps/control/main')

  await page.fill('#username', 'Demosalesmanager')

  await page.fill('#password', 'crmsfa')

  //  Login
  await page.click('.decorativeSubmit')

  //  Click CRM/SFA
  await page.click('text=CRM/SFA')

  // Click Leads
  await page.click('text=Leads')

  // Click Create Lead
  await page.click('text=Create Lead')

  // 8–15. Fill lead details
  await page.fill('#createLeadForm_companyName', 'TestLeaf Pvt Ltd')
  await page.fill('#createLeadForm_firstName', 'Preethu')
  await page.fill('#createLeadForm_lastName', 'Narayan')
  await page.fill('#createLeadForm_personalTitle', 'Ms.')
  await page.fill('#createLeadForm_generalProfTitle', 'QA Engineer')
  await page.fill('#createLeadForm_annualRevenue', '500000')
  await page.fill('#createLeadForm_departmentName', 'Testing')
  await page.fill('#createLeadForm_primaryPhoneNumber', '9876543210')

  //  Click Create Lead buttonn
  await page.click('[name="submitButton"]')

  // Verify the details
  const companyName = await page.locator('#viewLead_companyName_sp').innerText()
  const firstName = await page.locator('#viewLead_firstName_sp').innerText()
  const lastName = await page.locator('#viewLead_lastName_sp').innerText()

  console.log('Company Name:', companyName)
  console.log('First Name:', firstName)
  console.log('Last Name:', lastName)

  // Simple verification
  expect(companyName).toContain('TestLeaf');
  expect(firstName).toBe('Preethu');
  expect(lastName).toBe('Narayan');
})
