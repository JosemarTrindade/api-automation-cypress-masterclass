
import { makeBooking } from '../support/generators/bookingData';

/**
 * Teste de cadastro de reserva
 * Gera dados dinâmicos e valida o retorno da API
 */
describe("Cadastrar reserva", () => {
    const dados = makeBooking();

    it('Deve cadastrar reserva com sucesso', () => {
        cy.cadastrar_reserva(dados).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.bookingid).to.be.a('number').and.greaterThan(0);
            expect(response.body.booking.firstname).to.equal(dados.firstname);
            expect(response.body.booking.lastname).to.equal(dados.lastname);
            expect(response.body.booking.totalprice).to.equal(dados.totalprice);
            expect(response.body.booking.depositpaid).to.equal(dados.depositpaid);
            expect(response.body.booking.bookingdates.checkin).to.equal(dados.bookingdates.checkin);
            expect(response.body.booking.bookingdates.checkout).to.equal(dados.bookingdates.checkout);
            expect(response.body.booking.additionalneeds).to.equal(dados.additionalneeds);
        });
    });
});