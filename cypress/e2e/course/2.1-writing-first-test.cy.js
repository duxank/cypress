/// <reference types="cypress" />
describe('2.1 — Writing your first test', () => {
  it('should add a todo and assert it appears', () => {
    cy.visit('/todos');
    cy.get('[data-cy=new-todo]').type('Buy milk');
    cy.get('[data-cy=add-todo]').click();
    cy.get('[data-cy=todo-list]').should('contain', 'Buy milk');
  });
});

// <button data-cy="login-button">Login</button>
