# Juice Shop Feedback Form Automation

This repository contains Cypress automation for the Juice Shop Feedback form using a Page Object pattern and data-driven tests.

## Overview

- Page Objects encapsulate actions for HomePage and FeedbackPage.
- Data-driven tests use separate JSON files for valid and invalid feedback.
- CAPTCHA is automatically solved unless a custom value is provided.
- Easy navigation: FeedbackPage includes a single method to navigate from the home page.

## Folder Structure

```
cypress/
├── e2e/
│   └── feedback.cy.js          # Cypress test file
├── pages/
│   ├── HomePage.js             # Home page object
│   └── FeedbackPage.js         # Feedback page object
├── fixtures/
│   ├── feedbackValid.json      # Valid test data
│   └── feedbackInvalid.json    # Invalid test data
└── support/
    └── commands.js             # Custom Cypress commands
```

## How to Run Tests

1. Install dependencies:
   ```
   npm install
   ```
2. Open Cypress test runner:
   ```
   npx cypress open
   ```
3. Select `feedback.cy.js` to run the tests.
4. Tests will automatically navigate to the Feedback page and execute using the data in the fixture files.

## Data-Driven Testing

- `feedbackValid.json`: contains valid feedback entries that should submit successfully.
- `feedbackInvalid.json`: contains invalid feedback entries (e.g., wrong CAPTCHA, empty comment) to verify error handling.

## Usage

In the test file, you can loop through all entries in the fixture and use the FeedbackPage methods:

- `navigateToFeedbackPage()`
- `fillComment(comment)`
- `setRating(rating)`
- `fillCaptcha(value)` – automatically solves CAPTCHA if `value` is not provided.
- `submit()`
- `verifySuccess()` – checks for success messages.

## Notes

- The Page Object is a plain object, no classes or `new` needed.
- Each test iteration starts on a fresh page to avoid state issues.
- CAPTCHA is automatically read and solved for convenience.

## Mochawesome Reporting in This Framework

This Cypress framework uses **Mochawesome** to generate detailed HTML reports for every test run. It is integrated so that all your **data-driven tests and Page Object actions** automatically log results.

### How It Works

1. **Reporter Integration**
   - Added in `cypress.config.js` under `reporter` and `reporterOptions`.
   - Every test run generates a report in `cypress/reports/`.
   - To see results, run cypress: npx cypress run

  
<img width="1898" height="824" alt="test execution" src="https://github.com/user-attachments/assets/4e101859-f73a-49d4-8247-4aba7ef49580" />
<img width="1887" height="864" alt="test report" src="https://github.com/user-attachments/assets/9b2c418a-37b5-413e-bb4c-367fb65afaad" />
