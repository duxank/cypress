import { HomePage } from './HomePage';

export const FeedbackPage = {
  elements: {
    header: 'h1',
    commentField: '#comment',
    ratingSlider: 'mat-slider',
    captcha: '#captcha',
    captchaLabel: '#captcha',
    captchaInput: '#captchaControl',
    submitButton: '#submitButton',
  },

  navigateToFeedbackPage() {
    cy.get(HomePage.elements.logo, { timeout: 10000 }).should('be.visible');
    cy.get(HomePage.elements.menuButton).click();
    cy.get(HomePage.elements.sideNav).should('be.visible');
    cy.get(HomePage.elements.feedbackLink).click();
    cy.url().should('include', '/contact');
    cy.get(this.elements.header).should('contain.text', 'Customer Feedback');
  },

  fillComment(comment) {
    cy.get(this.elements.commentField).clear().type(comment);
  },

  setRating(rating) {
    cy.get(this.elements.ratingSlider)
      .should('be.visible')
      .then(($slider) => {
        const slider = $slider[0];
        const max = parseInt(slider.getAttribute('max')) || 5;
        const width = slider.getBoundingClientRect().width;

        // Calculate percentage along the slider
        const value = Math.min(Math.max(rating, 1), max);
        const clickX = (value / max) * width;

        cy.wrap($slider).click(clickX, 10); // x, y coordinates
      });
  },

  fillCaptcha(value = 'correct') {
    if (value === 'correct' || value === '') {
      // automatically read CAPTCHA and solve
      cy.get(this.elements.captcha, { timeout: 10000 })
        .should('be.visible')
        .invoke('text')
        .then((captchaStr) => {
          const answer = captchaStr.match(/\d+|[+\-*/]/g)
            ? eval(captchaStr.match(/\d+|[+\-*/]/g).join(''))
            : '';
          cy.get(this.elements.captchaInput)
            .should('be.visible')
            .clear()
            .type(answer.toString());
        });
    } else {
      // use provided custom value
      cy.get(this.elements.captchaInput)
        .should('be.visible')
        .clear()
        .type(value.toString());
    }
  },

  submit() {
    cy.get(this.elements.submitButton).click();
  },

  verifySuccess() {
    // Wait for snackbar to appear (language independent)
    cy.get('.mat-mdc-snack-bar-label', { timeout: 10000 }).should('be.visible');
  },

  verifyError() {
    cy.contains('There was a problem').should('be.visible');
  },
  // // Helper to solve numeric CAPTCHA string
  // solveCaptchaFromString(str) {
  //   const matches = str.match(/\d+|[+\-*/]/g); // extract numbers/operators
  //   if (!matches) return '';
  //   return eval(matches.join('')); // returns numeric answer
  // },

  // // --- NEW: Automatically read CAPTCHA from page and solve it ---
  // getCaptchaAnswerFromPage() {
  //   return cy
  //     .get(this.elements.captchaLabel)
  //     .invoke('text')
  //     .then((captchaStr) => this.solveCaptchaFromString(captchaStr));
  // },
};
