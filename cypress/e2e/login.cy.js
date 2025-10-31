import { LoginPage } from '../pages/LoginPage';

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit(LoginPage.url);
  });

  it('logs in successfully with valid credentials', () => {
    cy.get(LoginPage.elements.usernameInput).type('selenium');
    cy.get(LoginPage.elements.passwordInput).type('Asd123');
    cy.get(LoginPage.elements.loginButton).click();

    cy.url().should('include', '/logged-in');
  });

  it('shows error on invalid credentials', () => {
    cy.get(LoginPage.elements.usernameInput).type('selenium');
    cy.get(LoginPage.elements.passwordInput).type('badpass');
    cy.get(LoginPage.elements.loginButton).click();

    cy.get(LoginPage.elements.errorMessage)
      .should('be.visible')
      .and('contain', 'Your password is invalid!');
  });
});
