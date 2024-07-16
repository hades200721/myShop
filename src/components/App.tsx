import React from 'react';
import {Outlet as Body} from 'react-router-dom';
import {Header} from './header';
import {Footer} from './footer';
import {StyledLayout, StyledBody} from './style';

export const App = React.memo(() => {

    return (
        <main>
            <StyledLayout>
                <Header/>
                <StyledBody>
                    <Body/>
                </StyledBody>
                <Footer/>
            </StyledLayout>
        </main>
    );
});
