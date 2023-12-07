import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Then("Click checkbox",()=>{
    cy.get('.checkboxrow').eq(1).check();
})

And("Click confirm create order",()=>{
    cy.get('div[class="confirm-button"]').click()
})


And("Click confirm order",()=>{
    cy.get('button[id="confirm-order-btn"]').click()
    cy.get('button[id="confirm-submit-button"]').click()
})

And("Click delete order",()=>{
    cy.get('button[id="remove-order-btn"]').click()
    cy.get('input[placeholder="กรุณาพิมพ์คำว่า ลบ เพื่อยืนยัน"]').type('ลบ')
    cy.get('button[id="confirm-submit-button"]').click()
})