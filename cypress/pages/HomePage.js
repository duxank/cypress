export const HomePage = {
  url: 'https://juice-shop.herokuapp.com/#/',
  elements: {
    logo: '.logo', // indicator that home page loaded
    menuButton: 'button[aria-label="Open Sidenav"]',
    sideNav: 'mat-sidenav',
    feedbackLink: 'a[routerlink="/contact"]',
    welcomeHeader: 'h1:contains("Welcome to OWASP Juice Shop!")',
    cookieDismissButton: 'a[aria-label="dismiss cookie message"]',
    welcomeDialogCloseButton: "button[aria-label='Close Welcome Banner']",
  },
};
