import React from 'react'
import {Provider} from 'react-redux';
import {store} from '../../../../store/store';
import {Footer} from './footer'

describe('<Footer />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Provider store={store}>
            <Footer/>
        </Provider>)
    })
})