
import { faker } from '@faker-js/faker';
import { makeBooking } from '../support/generators/bookingData';


// const payload_reserva = require('../fixtures/reserva.json')

describe("Cadastrar reserva", () => {
    // const dados = {
    //     "firstname": faker.person.firstName(),
    //     "lastname": faker.person.lastName(),
    //     "totalprice": Number(faker.finance.amount({ min: 99, max: 999, dec: 0 })),
    //     "depositpaid": true,
    //     "bookingdates": {
    //         "checkin": faker.date.anytime().toString().slice(0, 9),
    //         "checkout": "2025-09-30"
    //     },
    //     "additionalneeds": "Breakfast"
    // }

    const dados = makeBooking();

    it('Cadastrar reserva com sucesso', () => {

        cy.cadastrar_reserva(dados).then((Response) => {
            expect(Response.status).equal(200);
            expect(Response.body.bookingid).not.NaN
            expect(Response.body.bookingid).greaterThan(0)
            expect(Response.body.booking.firstname).equal(dados.firstname);
            expect(Response.body.booking.lastname).equal(dados.lastname);
            expect(Response.body.booking.totalprice).equal(dados.totalprice);
        });
    });
});