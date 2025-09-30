import { faker } from "@faker-js/faker";


/**
 * Converte uma data para o formato ISO (YYYY-MM-DD).
 * @param {Date} date
 * @returns {string}
 */
function isoDate(date) {
    return new Date(date).toISOString().slice(0, 10);
}


/**
 * Gera um objeto de reserva (booking) fake para testes.
 * @param {Object} overrides - Propriedades para sobrescrever no objeto gerado
 * @returns {Object}
 */
export function makeBooking(overrides = {}) {
    // Check-in dentro dos próximos 30 dias
    const checkin = faker.date.soon({ days: 30 });
    // Check-out entre 1 e 10 dias após o check-in
    const checkout = faker.date.soon({
        days: faker.number.int({ min: 1, max: 10 }),
        refDate: checkin,
    });

    const base = {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        totalprice: faker.number.int({ min: 99, max: 999 }),
        depositpaid: faker.datatype.boolean(),
        bookingdates: {
            checkin: isoDate(checkin),
            checkout: isoDate(checkout),
        },
        additionalneeds: faker.helpers.arrayElement([
            "Quero café!!",
            "Café da manhã",
            "Late checkout",
            "Berço no quarto",
            "Sem necessidades adicionais",
        ]),
    };

    // Merge profundo simples para bookingdates (evita perder a estrutura)

    const merged = {
        ...base,
        ...overrides,
        bookingdates: {
            ...base.bookingdates,
            ...(overrides.bookingdates || {}),
        },
    };

    return merged;
}