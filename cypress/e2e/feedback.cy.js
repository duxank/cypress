import { HomePage } from '../pages/HomePage';
import { FeedbackPage } from '../pages/FeedbackPage';

describe('Scenario #2', () => {
  // describe('Valid feedback', () => {
  //   beforeEach(function () {
  //     // Load valid dataset
  //     cy.fixture('feedbackValidData.json').then((data) => {
  //       this.validData = data;
  //     });
  //     // Navigate to feedback page
  //     cy.visit(HomePage.url);
  //     cy.dismissCookiesIfPresent();
  //     cy.closeWelcomeBannerIfPresent();
  //     FeedbackPage.navigateToFeedbackPage();
  //   });

  //   it('should submit feedback using all valid data sets', function () {
  //     this.validData.forEach((data) => {
  //       FeedbackPage.fillComment(data.comment);
  //       FeedbackPage.setRating(data.rating);
  //       FeedbackPage.fillCaptcha(data.captcha);
  //       FeedbackPage.submit();

  //       // FeedbackPage.verifySuccess();
  //       cy.get('.mat-mdc-snack-bar-label', { timeout: 10000 }).should(
  //         'be.visible'
  //       );

  //       // Reset page for next iteration
  //       cy.reload();
  //       FeedbackPage.navigateToFeedbackPage();
  //     });
  //   });
  // });

  // describe('Invalid feedback', () => {
  //   beforeEach(function () {
  //     // Load invalid dataset
  //     cy.fixture('feedbackInvalidData.json').then((data) => {
  //       this.invalidData = data;
  //     });
  //     cy.visit(HomePage.url);
  //     cy.dismissCookiesIfPresent();
  //     cy.closeWelcomeBannerIfPresent();
  //     FeedbackPage.navigateToFeedbackPage();
  //   });

  //   it('should display error for wrong captcha', function () {
  //     this.invalidData.forEach((data) => {
  //       FeedbackPage.fillComment(data.comment);
  //       FeedbackPage.setRating(data.rating);
  //       FeedbackPage.fillCaptcha(data.captcha, { force: true });
  //       FeedbackPage.submit();

  //       // // Verify error message appears
  //       // cy.get('.mat-mdc-snack-bar-label', { timeout: 10000 }).should(
  //       //   'be.visible'
  //       // );

  //       cy.get('.mat-mdc-snack-bar-label', { timeout: 10000 })
  //         .should('be.visible')
  //         .and('contain.text', 'Wrong answer to CAPTCHA. Please try again.');

  //       // Reset page for next iteration
  //       cy.reload();
  //       // FeedbackPage.navigateToFeedbackPage();
  //     });
  //   });
  // });

  // describe('Language scenarios ', () => {
  //   beforeEach(function () {
  //     // Load invalid dataset

  //     cy.visit(HomePage.url);
  //     cy.dismissCookiesIfPresent();
  //     cy.closeWelcomeBannerIfPresent();
  //     FeedbackPage.navigateToFeedbackPage();
  //   });

  //   it('valid test for German language', function () {
  //     cy.selectLanguage('Deutsch');

  //     FeedbackPage.fillComment('some comment');
  //     FeedbackPage.setRating('3');
  //     FeedbackPage.fillCaptcha('correct', { force: true });
  //     FeedbackPage.submit();

  //     cy.get('.mat-mdc-snack-bar-label', { timeout: 10000 })
  //       .should('be.visible')
  //       .and('contain.text', 'Danke für dein Feedback.');

  //     // Reset page for next iteration
  //     cy.selectLanguage('English');
  //     cy.reload();
  //     // FeedbackPage.navigateToFeedbackPage();
  //   });
  // });

  describe('3. Submit valid feedback for multiple languages. (minimum 5 languages)', () => {
    beforeEach(function () {
      cy.fixture('feedbackValidDataLanguages.json').then((data) => {
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
        cy.selectLanguage(data.language);
        FeedbackPage.fillComment(data.comment);
        FeedbackPage.setRating(data.rating);
        FeedbackPage.fillCaptcha(data.captcha);
        FeedbackPage.submit();

        // FeedbackPage.verifySuccess();

        cy.get('.mat-mdc-snack-bar-label', { timeout: 15000 })
          .should('be.visible')
          .and('contain.text', data.expectedMessage);

        // Reset page for next iteration
        // cy.selectLanguage('English');
        cy.reload();
        FeedbackPage.navigateToFeedbackPage();
      });
    });
  });
});
