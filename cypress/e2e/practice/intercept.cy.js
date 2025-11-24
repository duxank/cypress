describe('Vehicle Insurance', () => {
  it('Navigate to practice page', function () {
    cy.visit('https://practice.expandtesting.com/dynamic-loading/2');

    // Use a broader matcher so query string/order differences or small changes won't break the intercept.
    cy.intercept('POST', /display-logs\.yads\.tech\/logs/).as('display');

    // Click the Start button which triggers the request
    cy.contains('button', 'Start').click();

    // Wait for the request to complete (give a little extra time in case it's slow)
    cy.wait('@display', { timeout: 10000 });

    cy.get('#finish h4').should('have.text', 'Hello World!');
  });
});

describe('Navigate to Browserstack demo page', () => {
  it('cypress intercept example', () => {
    cy.intercept('api/products').as('productList');
    cy.visit('https://www.bstackdemo.com/');
    cy.wait('@productList');
  });
});
