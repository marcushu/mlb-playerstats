/// <reference types="cypress" />

describe('basic usage', () => {
  it('displays detailed statistics', () => {
    cy.visit('http://localhost:3000');

    cy.get(':nth-child(2) > :nth-child(1) > [style="font-weight: bold;"]').click();

    cy.contains('Career');
  });

  it('switches teams', () => {
    cy.get('#teams').select('Detroit Tigers');

    const player1 = cy.get(':nth-child(2) > :nth-child(1) > [style="font-weight: bold;"]');

    cy.get('#teams').select('Texas Rangers');

    const player2 = cy.get(':nth-child(2) > :nth-child(1) > [style="font-weight: bold;"]');

    expect(player1).to.not.equal(player2);
  })
})