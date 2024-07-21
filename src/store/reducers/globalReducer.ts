import {IAction, IFilters, IGlobal} from '../../interface';
import {SET_FILTER_SEARCH_QUERY} from '../actions';

const INITIAL_FILTERS_VALUE = {
    filters: {
        searchQuery: '',
    },
}
export const globalReducer = (state: IGlobal = INITIAL_FILTERS_VALUE, action: IAction) => {
    switch (action.type) {
        case SET_FILTER_SEARCH_QUERY: {
            const filtersToSet = {
                ...state.filters,
                searchQuery: action.payload,
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
