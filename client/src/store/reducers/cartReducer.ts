import {IProduct} from '../../interface';
import {
    ADD_PRODUCT,
    INIT_CART,
} from '../actions';
import {IProductAction} from '../../interface/IAction';

const initialCartState: Array<IProduct> = []; // Define initial cart state as an empty array

export const cartReducer = (state: IProduct[] = initialCartState, action: IProductAction): IProduct[] => {
    switch (action.type) {
        case INIT_CART: {
            return [
                ...state,
            ];
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
