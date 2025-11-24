/// <reference types="cypress" />
const login = require('../pages/login.page');
const todo = require('../pages/todo.page');

describe('7 — Page Object pattern', () => {
  it('logs in using page object and adds todo', () => {
    const email = 'test@example.com';
    const password = 'Password123!';
    login.login(email, password); // will visit and login
    todo.visit();
    todo.add('Write course content');
    todo.todoList().should('contain', 'Write course content');
  });
});
