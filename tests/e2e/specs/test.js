/*
 * Fluffy - https://github.com/SirMishaa/Fluffy
 * Author - SirMishaa
 * License GNU General Public License v3.0 - https://github.com/SirMishaa/Fluffy/blob/master/LICENSE
 */

// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js App");
  });
});
