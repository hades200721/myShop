import {IAction, IModalObject} from '../../interface';
import {SET_IS_SHOW_MODAL} from '../actions';

const DEFAULT_EVENT_OBJECT = {
    isShowModal: true,
}

export const shopReducer = (state: IModalObject = DEFAULT_EVENT_OBJECT, action: IAction) => {
    switch (action.type) {
        case SET_IS_SHOW_MODAL: {
            return {
                ...state,
                isShowModal: action.payload,
            };
        }
        default:
            return state;
    }
};
