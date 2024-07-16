import {IAction, ICounters} from '../../interface';
import {
    INIT_CART,
    LOADING_INCREASE,
    LOADING_DECREASE,
    TIMER_DECREASE,
    TIMER_INCREASE,
    SET_IS_SHOW_MODAL
} from '../actions';

const DEFAULT_COUNTERS = {
    products: []
}

export const cartReducer = (state: ICounters = DEFAULT_COUNTERS, action: IAction) => {
    switch (action.type) {
        case INIT_CART: {
            return {
                ...state,
                loading: state.loading - 1,
            };
        }
        case LOADING_INCREASE: {
            return {
                ...state,
                loading: state.loading + 1,
            };
        }
        case TIMER_DECREASE: {
            return {
                ...state,
                timers: state.timers - 1,
            };
        }
        case TIMER_INCREASE: {
            return {
                ...state,
                timers: state.timers + 1,
            };
        }
        case SET_IS_SHOW_MODAL: {
            return DEFAULT_COUNTERS;
        }
        default:
            return state;
    }
};
