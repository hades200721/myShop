import type { Router } from '@remix-run/router';
import {createBrowserRouter, Link, redirect} from 'react-router-dom';
import {sleep} from './utils';
import {cartLoader, Cart, productLoader, Product, shopLoader, Shop} from '../components/pages';
import {App} from '../components/App';

export const routes: Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "account",
                element: <Account />,
            },
            {
                path: "cart",
                loader: cartLoader,
                element: <Cart />,
            },
            {
                path: "product/:id",
                loader: productLoader,
                element: <Product />,
            },
            {
                path: "redirect",
                loader: redirectLoader,
            },
            {
                index: true,
                loader: shopLoader,
                element: <Shop/>,
            },
            {
                path: "*",
                element: <NoMatch />,
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
