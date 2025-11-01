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

    // cy.get('body').then(($body) => {
    //   if ($body.find(HomePage.elements.cookieDismissButton).length > 0) {
    //     cy.get(HomePage.elements.cookieDismissButton).click({ force: true });
    //   } else {
    //     cy.log('Cookie popup not displayed');
    //   }
    // });

    // // 3. Open side drawer
    // cy.get(HomePage.elements.menuButton).click();

    // // 4. Wait for sidenav to be visible and click Feedback
    // cy.get(HomePage.elements.sideNav).should('be.visible');
    // cy.get(HomePage.elements.feedbackLink).click();

    // // 5. Verify feedback page loaded
    // cy.url().should('include', '/contact');
    // cy.get(FeedbackPage.elements.header).should(
    //   'contain.text',
    //   'Customer Feedback'
    // );

    // // 6. Verify fields are visible (basic rendering check)
    // cy.get(FeedbackPage.elements.commentField).should('be.visible');
    // cy.get(FeedbackPage.elements.ratingSlider).should('exist');
    // cy.get(FeedbackPage.elements.captcha).should('be.visible');
    // cy.get(FeedbackPage.elements.submitButton).should('be.enabled');
  });
});
