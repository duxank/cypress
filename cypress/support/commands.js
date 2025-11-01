import { HomePage } from '../pages/HomePage';

Cypress.Commands.add('closeWelcomeBannerIfPresent', () => {
  cy.get('body').then(($body) => {
    if ($body.find(HomePage.elements.welcomeDialogCloseButton).length > 0) {
      cy.get(HomePage.elements.welcomeDialogCloseButton).then(($el) => {
        if ($el.is(':visible')) {
          cy.wrap($el).click({ force: true });
        }
      });
    }
  });
});
Cypress.Commands.add('dismissCookiesIfPresent', () => {
  cy.get('body').then(($body) => {
    if ($body.find(HomePage.elements.cookieDismissButton).length > 0) {
      cy.get(HomePage.elements.cookieDismissButton).then(($el) => {
        if ($el.is(':visible')) {
          cy.wrap($el).click({ force: true });
        }
      });
    }
  });
});
