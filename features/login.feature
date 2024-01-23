Feature: Standard User Login Features

  Scenario: As a user, I can log into the secure area

    Given I am on the login page
    When I login with standard_user and secret_sauce
    Then I should be on the inventory page

  Scenario: Invalid User
    Given I am on the login page
    When I login with locked_out_user and secret_sauce
    Then I should recieve an error 