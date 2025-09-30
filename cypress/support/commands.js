/// <reference types="cypress"/>

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: '/auth',
        body: {
            "username": "admin",
            "password": "password123"
        }
    })
})

Cypress.Commands.add('alterar_reserva', (id_reserva, token, payload_reserva_alterada) => {
    cy.request({
        method: 'PUT',
        url: `/booking/${id_reserva}`,
        headers: {
            Cookie: `token=${token}`
        },
        body: payload_reserva_alterada
    });
})

Cypress.Commands.add('cadastrar_reserva', (payload_reserva) => {
    cy.request({
        method: 'POST',
        url: '/booking',
        body: payload_reserva,
    });
})