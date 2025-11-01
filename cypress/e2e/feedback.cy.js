import { HomePage } from '../pages/HomePage';
import { FeedbackPage } from '../pages/FeedbackPage';

describe('Feedback Form Data-Driven Tests', () => {
  describe('Valid feedback', () => {
    beforeEach(function () {
      // Load valid dataset
      cy.fixture('feedbackValidData.json').then((data) => {
        this.validData = data;
      });
      // Navigate to feedback page
      cy.visit(HomePage.url);
      cy.dismissCookiesIfPresent();
      cy.closeWelcomeBannerIfPresent();
      FeedbackPage.navigateToFeedbackPage();
    });

    it('should submit feedback using all valid data sets', function () {
      this.validData.forEach((data) => {
        FeedbackPage.fillComment(data.comment);
        FeedbackPage.setRating(data.rating);
        FeedbackPage.fillCaptcha(data.captcha);
        FeedbackPage.submit();

        FeedbackPage.verifySuccess();

        // Reset page for next iteration
        cy.reload();
        FeedbackPage.navigateToFeedbackPage();
      });
    });
  });

  describe('Invalid feedback', () => {
    beforeEach(function () {
      // Load invalid dataset
      cy.fixture('feedbackInvalidData.json').then((data) => {
        this.invalidData = data;
      });
      cy.visit(HomePage.url);
      cy.dismissCookiesIfPresent();
      cy.closeWelcomeBannerIfPresent();
      FeedbackPage.navigateToFeedbackPage();
    });

    it('should display error for all invalid data sets', function () {
      this.invalidData.forEach((data) => {
        FeedbackPage.fillComment(data.comment);
        FeedbackPage.setRating(data.rating);
        FeedbackPage.fillCaptcha(data.captcha);
        FeedbackPage.submit();

        // Verify error message appears
        cy.get('.mat-mdc-snack-bar-label', { timeout: 10000 }).should(
          'be.visible'
        );

        // Reset page for next iteration
        cy.reload();
        // FeedbackPage.navigateToFeedbackPage();
      });
    });
  });
});
