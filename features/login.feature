Feature: User Login Flows

  Scenario: Standard User
    Given I am on the login page
    When I login with standard_user and secret_sauce
    Then I should be on the inventory page

  Scenario: Invalid User
    Given I am on the login page
    When I login with locked_out_user and secret_sauce
    Then I should recieve an error 

  Scenario: Problem User
    Given I am on the login page
    When I login with problem_user and secret_sauce
    Then I should see an image problem on the inventory page

  Scenario: Error User
    Given I am on the login page
    When I login with error_user and secret_sauce
    Then I should be on the inventory page