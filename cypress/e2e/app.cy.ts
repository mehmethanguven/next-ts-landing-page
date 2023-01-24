/// <reference types="cypress" />

describe('Navigation', () => {
  // Bring everyone together to build better products

  it('should contain the text', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('h1').contains(/bring everyone together to build better products/i)
  })

  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    // cy.get('a[href*="/about"]').click({ multiple: true })
    // cy.findByText(/about/i).click({ force: true })
    const navigation = cy.findByRole('navigation')
    navigation.findByText(/about/i).click()
    // The new url should include "/about"
    cy.url().should('include', '/about')

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('About Page')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
