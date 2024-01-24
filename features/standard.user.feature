Feature: Standard User Login Workflows

Scenario: User purchases an item and goes through checkout flow 
    Given I am on the login page
    When I login with standard_user and secret_sauce
    And I order one item from the inventory
    And I click on the cart
    And I checkout from the cart page
    Then I should have ordered an item

Scenario: User purchases all items and goes through checkout flow 
    Given I am on the login page
    When I login with visual_user and secret_sauce
    And I order all items from the inventory
    And I click on the cart
    And I checkout from the cart page
    Then I should have ordered an item