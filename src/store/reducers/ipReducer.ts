import {IAction, IProduct} from '../../interface';
import {ADD_PRODUCT, SET_IS_SHOW_MODAL} from '../actions';

export const productsReducer = (state: IProduct[] = [], action: IAction) => {
    switch (action.type) {
        case SET_IS_SHOW_MODAL: {
            return [];
        }
        default:
            return state;
    }
};
