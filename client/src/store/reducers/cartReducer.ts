import {IAction, IProduct} from '../../interface';
import {
    ADD_PRODUCT,
    INIT_CART,
} from '../actions';


export const cartReducer = (state: IProduct[] = [], action: IAction) => {
    switch (action.type) {
        case INIT_CART: {
            return {
                ...state,
            };
        }
        case ADD_PRODUCT: {
            return [
                ...state,
                action.payload,
            ];
        }
        default:
            return state;
    }
};
