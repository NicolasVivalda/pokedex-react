describe('App test', () => {
  it('Visits the page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Conoce')
  });

  // it('Complet the input box', () => {
  //   cy.get('input').first().type('Pikachu')
  // });

  // it('Complet the input box', () => {
  //   cy.get('[placeholder = "Ingrese nombre pokemon"]').type('Pikachu')
  // });

  it('Visits the detail page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Ver detalles').click()
  });

})
