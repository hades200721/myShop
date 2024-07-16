import {Reducer, combineReducers} from 'redux';

import {counterReducer} from './counterReducer';
import {modalReducer} from './modalReducer';
import {ipReducer} from './ipReducer';
import {IAction} from '../../interface';
import {DESTROY_SESSION} from '../actions';
import {ICounters} from '../../interface';

const appReducer = combineReducers({
    counter: counterReducer,
    modal: modalReducer,
    ips: ipReducer,
});

interface IAppState {
    counter: ICounters;
    modal: never;
    ips: {
        ip: string;
        isError: boolean;
        isLoading: boolean;
        isValidIP: boolean;
        data: object;
    }[];
}

export const rootReducer: Reducer<IAppState, IAction> = (state, action: IAction) => {
    if (action.type === DESTROY_SESSION) {
        state = undefined;
    }
    return appReducer(state, action);
};
