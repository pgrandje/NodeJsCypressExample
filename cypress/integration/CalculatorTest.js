describe('Sample Test - React Calculator Example', function() {
  it('Visits the Calculator Example React App', function() {

    var computedValue;
    var expectedValue = 0;

    cy.visit('https://ahfarmer.github.io/calculator/');
    // cy.contains('type').click();
    
    cy.url().should('include', '/calculator');

    // cy.pause();

    // Get an input, type into it and verify that the value has been updated
    cy.get('.component-display > div').should('have.text', '0');

    // Click 7
    cy.get(':nth-child(2) > :nth-child(1) > button').click();
    cy.get('.component-display > div').should('have.text', '7');
    // Click +
    cy.get(':nth-child(4) > .orange > button').click();
    cy.get('.component-display > div').should('have.text', '7');
    // Click 5
    cy.get(':nth-child(3) > :nth-child(2) > button').click();
    cy.get('.component-display > div').should('have.text', '5');
    // Click =
    cy.get(':nth-child(5) > .orange > button').click();
    cy.get('.component-display > div').should('have.text', '12');


    //   .type('fake@email.com')
    //   .should('have.value', 'fake@email.com');
  })
})