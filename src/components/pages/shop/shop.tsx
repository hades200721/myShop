import React from 'react';
import {Header} from './header/header';
import {SideBar} from './sideBar';
import {Body} from './body/body';
import {StyledPage} from './style';
import {rand, sleep} from "../../../routing/utils";

export const Shop = React.memo(() => {

    return (
        <StyledPage>
            <SideBar/>
            <Body />
            <Header/>
        </StyledPage>
    );
});

export async function shopLoader() {
    // fetch to data goes here
    await sleep();
    return {data: `Home loader - random value ${rand()}`};
}

