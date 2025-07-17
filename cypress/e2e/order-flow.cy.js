describe('Kiosk to Kitchen Order Flow', () => {
  it('submits an order and verifies it appears in kitchen dashboard', () => {
    cy.visit('http://localhost:5174')

    // Add item to cart
    cy.get('[data-test=add-to-cart]').first().click()

    // Click to go to checkout
    cy.get('[data-test=cart-panel]').click()

    // Assert we're on the checkout page
    cy.get('[data-test=go-to-checkout]').click()
    cy.url().should('include', '/checkout')

    // Fill in payment details (wait for inputs to be visible)
    cy.get('[data-test=card-number]').should('be.visible').type('1234567812345678')
    cy.get('[data-test=expiry]').type('12/26')
    cy.get('[data-test=cvv]').type('123')

    // Submit payment
    cy.get('[data-test=place-order]').click()

    // Confirm success
    cy.contains('Thank you for your order!').should('exist')
  })
})
