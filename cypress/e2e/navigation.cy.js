import { HomePage } from '../pages/HomePage';
import { FeedbackPage } from '../pages/FeedbackPage';

describe('Navigate to Customer Feedback page', () => {
  it('should navigate to the feedback page and verify elements', () => {
    cy.visit(HomePage.url);
    cy.get(HomePage.elements.logo).should('be.visible');
    cy.dismissCookiesIfPresent();
    cy.get(HomePage.elements.welcomeHeader).should('be.visible');

    cy.closeWelcomeBannerIfPresent();
  });

  it('Cookies and Welcome message state saved after refresh', () => {
    cy.visit(HomePage.url);
    cy.get(HomePage.elements.logo).should('be.visible');
    cy.get(HomePage.elements.cookieDismissButton).should('be.visible').click();

    cy.get(HomePage.elements.welcomeHeader).should('be.visible');

    cy.get(HomePage.elements.welcomeDialogCloseButton)
      .should('be.visible')
      .click();

    cy.reload();
    cy.get(HomePage.elements.logo).should('be.visible');
    cy.get(HomePage.elements.cookieDismissButton).should('not.be.visible');
    cy.get(HomePage.elements.welcomeDialogCloseButton).should('not.exist');
  });
});
