/// <reference types="cypress" />
describe('3 — Locators and selectors', () => {
  it('uses data-cy attributes, role, text and performance tips', () => {
    cy.visit('/todos');
    // data-cy recommended
    cy.get('[data-cy=new-todo]').should('exist');

    // accessibility-based selectors
    cy.findByRole('button', { name: /add todo/i }).should('exist');

    // avoid brittle selectors
    cy.get('.btn-primary').should('exist');
  });
});

// Napomena: cy.findByRole zahteva Testing Library plugin — možeš pokazati kako dodati kasnije kao bonus.
