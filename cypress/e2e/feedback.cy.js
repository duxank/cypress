import { HomePage } from '../pages/HomePage';
import { FeedbackPage } from '../pages/FeedbackPage';

before(() => {
  cy.visit(HomePage.url);
  cy.dismissCookiesIfPresent();
  cy.closeWelcomeBannerIfPresent();
  cy.get(HomePage.elements.logo).should('be.visible');
  cy.get(HomePage.elements.menuButton).click();

  cy.get(HomePage.elements.sideNav).should('be.visible');
  cy.get(HomePage.elements.feedbackLink).click();

  cy.url().should('include', '/contact');
  cy.get(FeedbackPage.elements.header).should(
    'contain.text',
    'Customer Feedback'
  );
});

describe('Feedback Form Simple Test', () => {
  it('should submit feedback successfully', () => {
    FeedbackPage.fillComment('Great product!');

    FeedbackPage.setRating(5);

    FeedbackPage.fillCaptcha();

    FeedbackPage.submit();

    FeedbackPage.verifySuccess();
  });
});
