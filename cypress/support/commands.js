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


/**
 * Realiza login e retorna o token de autenticação.
 * @returns {Cypress.Chainable}
 */
Cypress.Commands.add('login', () => {
    return cy.request({
        method: 'POST',
        url: '/auth',
        body: {
            username: "admin",
            password: "password123"
        }
    });
});


/**
 * Altera uma reserva existente.
 * @param {number} id_reserva - ID da reserva
 * @param {string} token - Token de autenticação
 * @param {Object} payload_reserva_alterada - Dados da reserva alterada
 * @returns {Cypress.Chainable}
 */
Cypress.Commands.add('alterar_reserva', (id_reserva, token, payload_reserva_alterada) => {
    return cy.request({
        method: 'PUT',
        url: `/booking/${id_reserva}`,
        headers: {
            Cookie: `token=${token}`
        },
        body: payload_reserva_alterada
    });
});


/**
 * Cadastra uma nova reserva.
 * @param {Object} payload_reserva - Dados da reserva
 * @returns {Cypress.Chainable}
 */
Cypress.Commands.add('cadastrar_reserva', (payload_reserva) => {
    return cy.request({
        method: 'POST',
        url: '/booking',
        body: payload_reserva,
    });
});