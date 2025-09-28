import { fixture } from "../helpers/fixture";
import { expect} from '@playwright/test';
import fs from 'fs';




export class loginPage {



   private elements = {
      bookNowbutton: "Book Now",
      roomsSection: /^£100 per nightBook now$/,
      singleRoomButton: "Book now",
      pageTitle: ".fw-bold.mb-2",
      calendar: ".rbc-calendar",
      totalAmount: "div[class='d-flex justify-content-between fw-bold'] span:nth-child(2)",
      reserveNowButton: "Reserve Now",
      firstName: "Firstname",
      lastName: "Lastname",
      email: "Email",
      phone: "Phone",
      bookingConfirm: ".card-title.fs-4.fw-bold.mb-3",
      confirmationDates: ".text-center.pt-2",
      errorMessage: "div.alert.alert-danger>ul>li",
      roomsHeader: "Our Rooms",



   }


   private totalPricePerNight: number = 100;
   private cleaningFee: number = 40;




   async asstpage() {

      await fixture.page.goto("https://automationintesting.online/", { waitUntil: 'load', timeout: 60000 });

   }



   async clickBookNow() {

      await fixture.page.getByRole('link', { name: this.elements.bookNowbutton, exact: true }).click();

   }





   async verifyUrl(val: string) {
      expect(await fixture.page.url()).toContain(val);
    

   }

    async visualTest() {


      const screenshot = await fixture.page.screenshot();
     fs.writeFileSync('rooms.png', screenshot);
      await fixture.page.waitForTimeout(3000);

   }



   async singleRoom() {
      await fixture.page.locator('div').filter({ hasText: this.elements.roomsSection }).getByRole('link').click();
   }


   async verifyTitle(val: string) {
      expect(await fixture.page.locator(this.elements.pageTitle).textContent()).toEqual(val);
   }


   async calDisplayed() {
      expect(await fixture.page.locator(this.elements.calendar).isEnabled());
   }


   async enterDates(str1: string, str2: string) {
      await fixture.page.locator('input[type="text"]').first().clear();
      await fixture.page.locator('input[type="text"]').first().fill(str1);
      await fixture.page.getByRole('heading', { name: this.elements.roomsHeader }).click();
      await fixture.page.locator('input[type="text"]').nth(1).clear();
      await fixture.page.locator('input[type="text"]').nth(1).fill(str2);
      await fixture.page.getByRole('heading', { name: this.elements.roomsHeader }).click();



   }


   async verifyTotal(str1: number) {


      const calculated = this.totalPricePerNight * str1 + this.cleaningFee;
      console.log(`Calculated total: ${calculated}`);
      expect(await fixture.page.locator(this.elements.totalAmount).textContent()).toEqual('£' + `${calculated}`);

   }


   async clickReserveButton() {
      await fixture.page.getByRole('button', { name: this.elements.reserveNowButton }).click();
      await fixture.page.waitForTimeout(2000);
   }

   async verifyErrorMessage(str1: string) {

      await fixture.page.locator(this.elements.errorMessage).first().waitFor();
      const messages = await fixture.page
         .locator(this.elements.errorMessage)
         .allTextContents();
      console.log(messages);  // logs all li text values
      expect(messages).toContain(str1);

   }



   async enterFirstName(str: string) {
      await fixture.page.getByPlaceholder(this.elements.firstName).fill(str);
   }

   async enterLastName(str: string) {
      await fixture.page.getByPlaceholder(this.elements.lastName).fill(str);
   }

   async enterEmail(str: string) {
      await fixture.page.getByPlaceholder(this.elements.email).fill(str);
   }


   async enterPhone(str: string) {
      await fixture.page.getByPlaceholder(this.elements.phone).fill(str);
   }


   async confirmBookingMessage(str: string) {
      expect(await fixture.page.locator(this.elements.bookingConfirm).textContent()).toEqual(str);

   }


   async confirmDatesBooked(str: string) {
      expect(await fixture.page.locator(this.elements.bookingConfirm).textContent()).toEqual(str);
   }

}
module.exports = { loginPage };