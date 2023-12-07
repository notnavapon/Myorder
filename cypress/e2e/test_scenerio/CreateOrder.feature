Feature: Create order

  Scenario: Create an order via IG and make a payment using Cash on Delivery (COD).
    Given Go to myorder website
    When Login to website with username 'notnavapon.nnk@gmail.com' and password '12345678'
    Then Select Product sales channel
    And Enter customer info
    And Add product on system
    And Select payment COD
    And Click confirm create order

  Scenario: Create an order via IG and make a payment using Transfer with Bank(BANK)
    Given Go to myorder website
    When Login to website
    Then Select Product sales channel
    And Enter customer info
    And Add product on system
    And Select payment BANK
    And Click confirm create order


  Scenario: Create an order via IG with Autofill and make a payment using Cash on Delivery (COD).
    Given Go to myorder website
    When Login to website
    Then Select Product sales channel
    And Autofill customer info
    And Add product on system
    And Select payment COD
    And Click confirm create order





