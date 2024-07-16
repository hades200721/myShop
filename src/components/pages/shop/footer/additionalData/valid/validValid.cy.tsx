import React from 'react'
import { Valid } from './valid'

describe('<Valid />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Valid />)
  })
})