import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';
import { fixture } from "./fixture";

let browser: Browser;
let context: BrowserContext;
let page: Page;





BeforeAll(async function () {

  browser = await chromium.launch({ headless: false, args: ["--start-maximized"], })
  context = await browser.newContext()
  page = await context.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  fixture.page = await page;
  // await  page.goto("https://automationintesting.online/",{waitUntil:'load',timeout:60000}); 

})


AfterAll(async function () {

  await fixture.page.close();
  await context.close();
  await browser.close();
  console.log("after statment from global snippets");

})


