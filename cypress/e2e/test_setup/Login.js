import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";


Given("Go to myorder website", ()=>{
    cy.visit('https://www.myorder.ai/login')
})


When("Login to website",()=>{
    cy.get('[id="email-input"]').type('notnavapon.nnk@gmail.com')
    cy.get('[id="password-input"]').type('12345678')
    cy.get('[id="login-button"]').click()

    cy.intercept('https://mod-am-gateway.myorder.ai/account-management/team/account/full').as('waitteam')
    cy.wait('@waitteam')
    cy.contains('.team-name', 'test team').click()
})


When("Login to website with username {string} and password {string}",(username, password)=>{
    cy.get('[id="email-input"]').type(username)
    cy.get('[id="password-input"]').type(password)
    cy.get('[id="login-button"]').click()

    cy.intercept('https://mod-am-gateway.myorder.ai/account-management/team/account/full').as('waitteam')
    cy.wait('@waitteam')
    cy.contains('.team-name', 'test team').click()
})