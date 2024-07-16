import {Button} from './button'

describe('<Button />', () => {
  it('renders', () => {
    cy.mount(<Button label={'test'} />)
  })
})