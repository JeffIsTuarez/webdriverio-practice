Feature: Standard User Login Features

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with standard_user and secret_sauce
    Then I should be on the inventory page
