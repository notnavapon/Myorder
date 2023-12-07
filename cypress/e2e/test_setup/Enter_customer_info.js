import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";




Then("Select Product sales channel",()=>{
    cy.get('div[class="channel-sell"]').within(() =>{
        cy.get('div[class="instagram-channel ng-star-inserted"]').click()
    })
})

And("Enter customer info",()=>{
    cy.get('input[id="customer-name-input"]').type('นายทดสอบ หนึง')
    cy.get('input[id="tel-input"]').type('0804567890')
    cy.get('textarea[id="address-input"]').type('ต.ปากเกร็ด อ.ปากเกร็ด จ.นนทบุรี 11120')
    cy.get('textarea[id="search-address"]').type('ต.ปากเกร็ด อ.ปากเกร็ด จ.นนทบุรี 11120')
    cy.get('div[class="tt-suggestion tt-selectable"]').contains('ปากเกร็ด » ปากเกร็ด » นนทบุรี » 11120').click({ force: true })
})

And("Autofill customer info",()=>{
    cy.get('textarea[id="address-detect-input"]').type('นวพล ณ นคร 0801234567 31/99 ต.ปากเกร็ด อ.ปากเกร็ด จ.นนทบุรี 11120')
})


And("Add product on system",()=>{
    cy.intercept('https://mod-om-gateway.myorder.ai/order-management/product/open-order/filter').as('waitpopup')
    cy.get('div[id="system-product-add"]').contains('เพิ่มสินค้าในระบบ').click()
    cy.wait('@waitpopup')
    cy.contains(' สินค้ากรอกเอง ').click()
    cy.get('input[formcontrolname="name"][placeholder="ชื่อสินค้า"]').type('ทดสอบ')
    cy.get('input[formcontrolname="price"][placeholder="ราคา"]').type('10')
    cy.get('input[formcontrolname="weight"][placeholder="น้ำหนัก"]').type('1')
    cy.get('input[formcontrolname="name"][placeholder="ชื่อสินค้า"]').type('ทดสอบ')
    cy.get('button[id="select-product-button"]').contains('เลือกสินค้า').click()
})

