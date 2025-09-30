
const payload_reserva = require('../fixtures/reserva.json');
const payload_reserva_alterada = require('../fixtures/reserva_alterada.json');

var token;
var id_reserva;

describe("Alterar Reserva", () => {

    beforeEach(() => {

       cy.login().then((resposta) => {
            token = resposta.body.token
        });

        cy.cadastrar_reserva(payload_reserva).then((Response) => {
            console.log('===> Resposta ', Response);
            expect(Response.status).equal(200);
            expect(Response.body.booking.additionalneeds).equal(payload_reserva.additionalneeds);

            id_reserva = Response.body.bookingid

        });
    });


    it("Alterar reserva com sucesso", () => {

        cy.alterar_reserva(id_reserva, token, payload_reserva_alterada).then((resposta) => {
            expect(resposta.status).equal(200);
            expect(resposta.body.additionalneeds).equal('Não quero café');
        })
    });
});
