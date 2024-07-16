import React from 'react'
import { InvalidIP } from './invalidIP'

describe('<InvalidIP />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InvalidIP />)
  })
})