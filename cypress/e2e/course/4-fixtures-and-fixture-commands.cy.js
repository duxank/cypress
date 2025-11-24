/// <reference types="cypress" />
describe('4 — Fixtures and test data', () => {
  beforeEach(() => {
    cy.fixture('users').as('usersData');
  });

  it('loads fixture and uses it for login', function () {
    cy.visit('/login');
    const u = this.usersData.validUser;
    cy.get('[data-cy=login-email]').type(u.email);
    cy.get('[data-cy=login-password]').type(u.password);
    cy.get('[data-cy=login-submit]').click();
    cy.contains('Welcome').should('exist');
  });
});
