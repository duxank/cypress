/// <reference types="cypress" />
describe('8 — Handling flaky tests and retries', () => {
  it('demonstrates test with retries configured', () => {
    // show approach: keep test deterministic, use retries only for network flakiness
    cy.visit('/unstable-endpoint');
    cy.get('[data-cy=status]').should('not.contain', 'error');
  });
});
