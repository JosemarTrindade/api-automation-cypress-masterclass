
/// <reference types="cypress"/>

// funcionalidade
describe("Buscar Dispositivo", () => {
    // cenario de teste
    it("Buscar dispositivo existente", () => {
        // request
        cy.request({
            method: 'GET',
            url: "https://api.restful-api.dev/objects/3"
        }).then((resposta) => {
            // quando a resposta acontecer
            // console.log('===> Resposta ', resposta);
            expect(resposta.status).to.equal(200);
            expect(resposta.body.id).equal('3');
            expect(resposta.body.name).equal('Apple iPhone 12 Pro Max');
            expect(resposta.body.data.color).equal('Cloudy White');
        });

    });

    // cenario de teste
    it("Buscar dispositivo inexistente", () => {
        // request
        cy.request({
            method: 'GET',
            url: "https://api.restful-api.dev/objects/xpto",
            failOnStatusCode: false
        }).then((resposta) => {
            // quando a resposta acontecer
            // console.log('===> Resposta ', resposta);
            expect(resposta.status).equal(404);
            expect(resposta.body.error).equal("Oject with id=xpto was not found.");

        });

    });

});

