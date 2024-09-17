import {compose, createStore} from 'redux';
import {rootReducer} from './reducers';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export type RootState = ReturnType<typeof store.getState>;
