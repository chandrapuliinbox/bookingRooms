
import { Given, When, Then } from '@cucumber/cucumber';
import { loginPage } from '../pageObjects/loginPage';



const loginpage = new loginPage();

Given('User navigates to the practice application', async function () {
  await loginpage.asstpage();
});



Given('User click on book now button on hero section', async function () {
  await loginpage.clickBookNow();
});





Given('i verify user is navigated and url contains {string}', async function (string) {
  await loginpage.verifyUrl(string);
  
  });




Given('User chooses a room type and clicks book now', async function () {
  await loginpage.singleRoom();
});



When('page has title {string}', async function (string) {
  await loginpage.verifyTitle(string);
});



Then('calendar is displayed', async function () {
  await loginpage.calDisplayed();
});

Then('enter checkin {string} and checkout dates {string}', async function (str1: string, str2: string) {
  await loginpage.enterDates(str1, str2);
});


Then('I verify the total is 340 including 40 for service for {string} nights', async function (str1: number) {
  await loginpage.verifyTotal(str1);
});

Then('user clicks on reserve now button', async function () {
  await loginpage.clickReserveButton();
});

Then('I Verify error message {string} is displayed', async function (str1: string) {
  await loginpage.verifyErrorMessage(str1);
});

Then('i enter Firstname {string}', async function (str1: string) {
  await loginpage.enterFirstName(str1);
});

Then('i enter last name {string}', async function (str1: string) {
  await loginpage.enterLastName(str1);
});

Then('i enter email {string}', async function (str1: string) {
  await loginpage.enterEmail(str1);
});

Then('i enter phone number {string}', async function (str1: string) {
  await loginpage.enterPhone(str1);
});

Then('i verify {string} message', async function (str1: string) {
  await loginpage.confirmBookingMessage(str1);
});

Then('i verify confimation dates as {string}', async function (str1: string) {
  await loginpage.confirmDatesBooked(str1);
});


