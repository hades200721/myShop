import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../../../store/store';
import {Header} from './header'

describe('<Footer />', () => {
    it('renders', () => {
        cy.mount(<Provider store={store}>
            <Header/>
        </Provider>)
    })
})