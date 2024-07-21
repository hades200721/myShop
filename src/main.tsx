import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {routes} from './routing/route';
import {store} from './store/store';
import './style/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider
                router={routes}
                fallbackElement={<></>}
            />
        </Provider>
    </React.StrictMode>,
)
