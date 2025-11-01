import { HomePage } from '../pages/HomePage';

Cypress.Commands.add('closeWelcomeBannerIfPresent', () => {
  cy.get('body').then(($body) => {
    const bannerButton = $body.find(HomePage.elements.welcomeDialogCloseButton);

    if (bannerButton.length) {
      cy.wrap(bannerButton).click({ force: true });

      cy.get(HomePage.elements.welcomeDialogCloseButton).should('not.exist'); //Re-query the DOM
      cy.get('div.mat-mdc-dialog-surface.mdc-dialog__surface').should(
        'not.exist'
      );
    }
  });
});
Cypress.Commands.add('dismissCookiesIfPresent', () => {
  cy.get('body').then(($body) => {
    if ($body.find(HomePage.elements.cookieDismissButton).length > 0) {
      cy.get(HomePage.elements.cookieDismissButton)
        .should('be.visible')
        .click({ force: true })

        .should('not.be.visible'); // wait until it's hidden
    }
  });
});
Cypress.Commands.add('selectLanguage', (language) => {
  // Open the language dropdown or button
  cy.get('#navbarLanguageButton').click({ force: true });

  // Find the desired language radio button and click
  cy.get('body')
    .find('mat-radio-button')
    .contains(language)
    .click({ force: true });
});
