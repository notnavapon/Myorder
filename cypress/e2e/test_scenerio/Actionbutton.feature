Feature: Test confirm , delete order
  Scenario: Confirm order
    Given Go to myorder website
    When Login to website
    Then Click checkbox
    And Click confirm order
    

  Scenario: Delete order
    Given Go to myorder website
    When Login to website
    Then Click checkbox
    And Click delete order



