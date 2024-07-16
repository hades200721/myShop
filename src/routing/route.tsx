import type { Router } from '@remix-run/router';
import {createBrowserRouter, Link, useLoaderData, redirect} from 'react-router-dom';
import {sleep, rand} from './utils';
import {shopLoader, Shop} from '../components/pages';
import {App} from "../components/App";

export const routes: Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                loader: shopLoader,
                element: <Shop/>,
            },
            {
                path: "account",
                element: <Account/>,
            },
            {
                path: "cart",
                loader: dashboardLoader,
                element: <Cart/>,
            },
            {
                path: "redirect",
                loader: redirectLoader,
            },
            {
                path: "*",
                element: <NoMatch/>,
            },
        ],
    },
]);

function Account() {
    return (
        <div>
            <h2>account</h2>
        </div>
    );
}

async function dashboardLoader() {
    await sleep();
    return {data: `Dashboard loader - random value ${rand()}`};
}

function Cart() {
    let data = useLoaderData();
    return (
        <div>
            <h2>Cart</h2>
            <p>Loader Data: {data.data}</p>
        </div>
    );
}

async function redirectLoader() {
    await sleep();
    return redirect("/");
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
