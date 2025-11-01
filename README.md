# cypress

Cypress POC project

# Juice Shop Feedback Form Automation

This repository contains Cypress automation for the Juice Shop Feedback form using a Page Object pattern and data-driven tests.

## Overview

- Page Objects: Encapsulate actions for HomePage and FeedbackPage.
- Data-driven tests: Separate JSON files for valid and invalid feedback data.
- Automatic CAPTCHA handling: Solves numeric CAPTCHA automatically unless a custom value is provided.
- Easy navigation: FeedbackPage includes a single method to navigate from the home page.

## Folder Structure

cypress/
├── e2e/
│ └── feedback.cy.js # Cypress test file
├── pages/
│ ├── HomePage.js # Home page object
│ └── FeedbackPage.js # Feedback page object
├── fixtures/
│ ├── feedbackValid.json # Valid test data
│ └── feedbackInvalid.json # Invalid test data
└── support/
└── commands.js # Custom Cypress commands

## How to Run Tests

1. Install dependencies: npm install
2. Open Cypress test runner: npx cypress open
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
