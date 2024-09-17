import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {routes} from './routing/route';
import {store} from './store/store';
import {Chat} from './components/chat/';
import './style/global.css';
import {StyledButton} from './components/pages/shop/body/style';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider
                router={routes}
                fallbackElement={<>
                  <StyledButton onClick={() => true} label={'account'}>
                  </StyledButton></>}
            />
          <Chat/>
        </Provider>
    </React.StrictMode>,
)
