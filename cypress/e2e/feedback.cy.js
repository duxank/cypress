describe('Navigate to Customer Feedback page', () => {
  it('should navigate to the feedback page and verify elements', () => {
    cy.visit(HomePage.url);
    cy.get(HomePage.elements.logo).should('be.visible');
    cy.get('body').then(($body) => {
      if ($body.find(HomePage.elements.cookieDismissButton).length > 0) {
        cy.get(HomePage.elements.cookieDismissButton).click({ force: true });
      }
    });
    cy.get(HomePage.elements.welcomeHeader).should('be.visible');
    cy.get(HomePage.elements.welcomeDialogCloseButton)
      .should('be.visible')
      .click();
  });
});
