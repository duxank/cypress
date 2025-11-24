/// <reference types="cypress" />
describe('6 — Custom commands', () => {
  it('uses custom login command', () => {
    cy.fixture('users').then((users) => {
      cy.loginByApi(users.validUser.email, users.validUser.password);
      cy.visit('/todos');
      cy.contains('Welcome').should('exist');
    });
  });
});
