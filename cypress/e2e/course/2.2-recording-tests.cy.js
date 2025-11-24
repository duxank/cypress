/// <reference types="cypress" />
describe('2.2 — Recording Tests with Cypress', () => {
  it('records and replays basic workflow', () => {
    // show how to use Cypress Test Runner recording or cy.task for side effects
    cy.visit('/');
    cy.contains('Get Started').click();
    cy.url().should('include', '/getting-started');
  });
});
