import React from 'react';
import {StyledPage} from './style';
import {rand, sleep} from '../../../routing/utils';
import {useLoaderData} from "react-router-dom";

export const Cart = React.memo(() => {
    let data = useLoaderData();
    return (
        <div>
            <h2>Cart</h2>
            <p>Loader Data: {data.data}</p>
        </div>
    );
});

export async function cartLoader() {
    // fetch to data goes here
    await sleep();
    return {data: `cart loader - random value ${rand()}`};
}

