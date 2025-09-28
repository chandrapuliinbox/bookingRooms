Feature: User booking tests

  Scenario: user should navigate to booking room section
     Given User navigates to the practice application
    And User click on book now button on hero section
    Then i verify user is navigated and url contains "booking"


     Scenario: user should select a rooms
     Given User navigates to the practice application
     And User click on book now button on hero section
     And User chooses a room type and clicks book now
     Then i verify user is navigated and url contains "reservation"
     And page has title "Single Room"
     And calendar is displayed   


Scenario: user validates price for 3 nights
     Given User navigates to the practice application
     And enter checkin "10/10/2025" and checkout dates "13/10/2025"
     And User chooses a room type and clicks book now
     Then I verify the total is 340 including 40 for service for "3" nights

     
Scenario: validate errors messages for when mandatory fields are not filled
     Given User navigates to the practice application
     And enter checkin "10/10/2025" and checkout dates "13/10/2025"
     And User chooses a room type and clicks book now
     When user clicks on reserve now button
     When user clicks on reserve now button
     Then I Verify error message "Firstname should not be blank" is displayed 

  Scenario: submit reservation and asset dates
    Given User navigates to the practice application
    And enter checkin "01/10/2025" and checkout dates "01/10/2025"
    And User chooses a room type and clicks book now
    When user clicks on reserve now button
     And i enter Firstname "charles"
     And i enter last name "cxenor"
     And i enter email "t@gmail.com"
     And i enter phone number "07656473645"
  #    When user clicks on reserve now button
  #    Then i verify "Booking Confirmed" message
  #    And  i verify confimation dates as "2025-10-11 - 2025-10-11"




   
