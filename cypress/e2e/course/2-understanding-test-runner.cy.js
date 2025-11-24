/// <reference types="cypress" />
describe('2 — Understanding Cypress Test Runner', () => {
  it('opens the app and demonstrates runner features', () => {
    // show visiting base URL, using .only, .skip, time travel, snapshots, DOM querying
    cy.visit('/');
    cy.contains('h1', /todo/i).should('exist');

    // demonstrate interacting with runner: freeze on failure, debugging
    cy.get('body').then(($body) => {
      // explain how to use DevTools snapshot and command log
      expect($body).to.exist;
    });
  });
});
