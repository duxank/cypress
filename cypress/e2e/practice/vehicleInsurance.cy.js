describe('Vehicle Insurance', () => {
  it('Navigate to auto insurance', function () {
    cy.visit('https://sampleapp.tricentis.com/101/');
    cy.get('h1').contains('Vehicle Insurance Application');
    cy.get('#app_sub_title').should('contain.text', 'Vehicle Insurance');
    cy.get('#nav_automobile').click();
    cy.get('#selectedinsurance').should('contain.text', 'Automobile Insurance');
  });
});

describe('Vehicle Insurance', () => {
  beforeEach(() => {
    cy.visit('https://learn.cypress.io/advanced-cypress-concepts');
  });

  it.only('Navigate to Cypress Testing', function () {
    // cy.get('h1').contains('Advanced Cypress Testing Concepts');
    cy.get("[data-test='hero-heading']").contains(
      'Advanced Cypress Testing Concepts'
    );
  });

  it.only('Features on homepage are correct', function () {
    cy.get('dt').eq(0).contains('How to debug test failures');
  });
});
