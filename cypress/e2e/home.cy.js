// Copyright 2024 Thomas Wills
// Licensed under the MIT License. See LICENSE file in the project root for full license information.


describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
   // cy.injectAxe(); // Inject the axe-core accessibility engine
  });

  it('renders the homepage', () => {
    cy.contains('Thomas Wills').should('be.visible');
  });

  it('toggles dark mode', () => {
    cy.contains('Dark Mode').click();
    cy.get('div.min-h-screen').should('have.class', 'bg-gray-900');
  });



  it('flips a card and shows details', () => {
    cy.contains('Fullstack Software Engineer').click();
    cy.contains('Skilled in building fullstack web applications').should('be.visible');
  });


});
