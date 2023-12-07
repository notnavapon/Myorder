import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";


And("Select payment COD",()=>{
    cy.get('app-dropdown[class="payment-type"]').click()
    cy.contains('ชำระเงินปลายทาง (COD)').click()
})



And("Select payment BANK",()=>{
    cy.get('app-dropdown[class="payment-type"]').click()
    cy.contains(' โอนเงิน (BANK) ').click()
    cy.intercept('https://mod-om-gateway.myorder.ai/kbank/slip/verify/raw').as('waituploadpic')
    cy.get('label[for="slip-upload-payment"]').selectFile('cypress/fixtures/images.png') 
    cy.wait('@waituploadpic')
    cy.get('input[id="amount-input"]').type('100')
    cy.get('input[id="date-input"]').type('2023-12-01')
    cy.get('input[id="time-input"]').type('10:30')


})