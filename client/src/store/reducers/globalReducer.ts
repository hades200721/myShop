import {IGlobal} from '../../interface';
import {SET_FILTER_BY_KEY, SET_SORTING} from '../actions';
import {IFilterChangeAction} from '../../interface';
import {SORTING_DEFAULT_VALUE} from '../../components/pages/shop/sideBar/sorting/constants';
import {ISortingChangeAction} from '../../interface/IAction';

const INITIAL_FILTERS_VALUE = {
    filters: {
        searchQuery: '',
    },
    sorting: SORTING_DEFAULT_VALUE,
}

export const globalReducer = (state: IGlobal = INITIAL_FILTERS_VALUE, action: IFilterChangeAction | ISortingChangeAction): IGlobal=> {
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
        case SET_SORTING: {
            return {
                ...state,
                sorting: (action as ISortingChangeAction).payload,
            };
        }
        default:
            return state;
    }
};
