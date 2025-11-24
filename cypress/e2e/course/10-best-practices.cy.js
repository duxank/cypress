/// <reference types="cypress" />
describe('10 — Best practices and test architecture', () => {
  it('shows examples of small, fast, isolated tests', () => {
    cy.visit('/todos');
    // keep assertions single responsibility
    cy.get('[data-cy=todo-list]').should('exist');
  });
});
