  const {test,expect} = require('@playwright/test')
  
  
  test.only('visual',async({page})=>
{
    //make payment -when you 0 balance
      await page.goto("https://automationintesting.online/");
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.getByRole('link', { name: 'Book Now', exact: true }).click();
     // await page.waitForSelector(`(//a[@class='btn btn-primary'][normalize-space()='Book now'])[1]`,{ state: 'visible' });
       await  page.waitForTimeout(3000);
       expect(await page.screenshot()).toMatchSnapshot('rooms.png');

})