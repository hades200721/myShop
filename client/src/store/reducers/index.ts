import {Reducer, combineReducers} from 'redux';

import {cartReducer} from './cartReducer';
import {globalReducer} from './globalReducer';
import {productsReducer} from './productReducer';
import {IGlobal, IProduct} from '../../interface';
import {DESTROY_SESSION} from '../actions';


const appReducer = combineReducers({
    cart: cartReducer,
    global: globalReducer,
    products: productsReducer,
});

export interface IAppState {
    cart: Array<IProduct> | [];
    global: IGlobal;
    products: Array<IProduct> | [];
}

export const rootReducer: Reducer<IAppState | undefined, any> = (state, action: any) => {
    if (action.type === DESTROY_SESSION) {
        state = undefined;
    }
    return appReducer(state, action);
};
