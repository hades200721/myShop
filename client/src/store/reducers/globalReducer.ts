import {IGlobal} from '../../interface';
import {SET_FILTER_BY_KEY} from '../actions';
import {IFilterChangeAction} from '../../interface/IAction';

const INITIAL_FILTERS_VALUE = {
    filters: {
        searchQuery: '',
    },
}
export const globalReducer = (state: IGlobal = INITIAL_FILTERS_VALUE, action: IFilterChangeAction) => {
    switch (action.type) {
        case SET_FILTER_BY_KEY: {
            const filtersToSet = {
                ...state.filters,
                [action.payload.id]: action.payload.value,
            };
            return {
                ...state,
                filters: filtersToSet,
            };
        }
        default:
            return state;
    }
};
