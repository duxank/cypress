/// <reference types="cypress" />
describe('9 — CI integration demo', () => {
  it('smoke test for CI', () => {
    cy.visit('/');
    cy.contains('h1').should('exist');
  });
});
