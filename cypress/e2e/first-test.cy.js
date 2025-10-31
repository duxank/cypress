describe('First Cypress test', () => {
  it('open google and check title', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include', 'Google');
  });
});
