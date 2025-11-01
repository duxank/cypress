import { HomePage } from '../pages/HomePage';
import { FeedbackPage } from '../pages/FeedbackPage';

describe('Scenario #1', () => {
  beforeEach(() => {
    cy.visit(HomePage.url);
  });

  describe('First time user, navigate to Customer Feedback page', () => {
    it('should navigate to the feedback page and verify elements', () => {
      cy.get(HomePage.elements.logo).should('be.visible');
      cy.dismissCookiesIfPresent();
      cy.get(HomePage.elements.welcomeHeader).should('be.visible');

      cy.closeWelcomeBannerIfPresent();

      // // 3. Open side drawer
      cy.get(HomePage.elements.menuButton).click();

      cy.get(HomePage.elements.sideNav).should('be.visible');
      cy.get(HomePage.elements.feedbackLink).click();

      cy.url().should('include', '/contact');
      cy.get(FeedbackPage.elements.header).should(
        'contain.text',
        'Customer Feedback'
      );
    });

    it('Cookies and Welcome message state saved after refresh', () => {
      cy.get(HomePage.elements.logo).should('be.visible');
      cy.get(HomePage.elements.cookieDismissButton)
        .should('be.visible')
        .click();

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
});
