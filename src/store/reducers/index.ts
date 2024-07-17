import {Reducer, combineReducers} from 'redux';

import {cartReducer} from './cartReducer';
import {shopReducer} from './modalReducer';
import {productsReducer} from './ipReducer';
import {IAction, IProduct} from '../../interface';
import {DESTROY_SESSION} from '../actions';

const appReducer = combineReducers({
    cart: cartReducer,
    shop: shopReducer,
    products: productsReducer,
});

interface IAppState {
    cart: Array<IProduct>;
    shop: never;
    products: Array<IProduct>;
}

export const rootReducer: Reducer<IAppState, IAction> = (state, action: IAction) => {
    if (action.type === DESTROY_SESSION) {
        state = undefined;
    }
    return appReducer(state, action);
};
