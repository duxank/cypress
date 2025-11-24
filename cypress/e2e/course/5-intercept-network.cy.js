/// <reference types="cypress" />
describe('5 — Network intercepts and stubbing', () => {
  it('stubs todos API to test edge case and error handling', () => {
    cy.intercept('GET', '/api/todos', { fixture: 'todos.json' }).as('getTodos');
    cy.visit('/todos');
    cy.wait('@getTodos');
    cy.get('[data-cy=todo-list]').should('exist');
  });

  it('simulates server error', () => {
    cy.intercept('POST', '/api/todos', {
      statusCode: 500,
      body: { message: 'Server error' },
    }).as('createTodoFail');

    cy.visit('/todos');
    cy.get('[data-cy=new-todo]').type('Fail todo');
    cy.get('[data-cy=add-todo]').click();
    cy.wait('@createTodoFail');
    cy.contains('Something went wrong').should('be.visible');
  });
});
// Dodatak: kreiraj cypress/fixtures/todos.json po potrebi ako želiš demo podataka
