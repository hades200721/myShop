import {IIP, IIPAction} from '../../interface';
import {ADD_IP, SET_IS_SHOW_MODAL, TIMER_TICK, UPDATE_IP_OBJECT} from '../actions';
import {Timer} from '../../services/timer';

const EMPTY_IP = {
    ip: '',
    isError: false,
    isLoading: false,
    isValidIP: false,
    data: {},
}

const DEFAULT_IPS = [
    {
        ip: '',
        isError: false,
        isLoading: false,
        isValidIP: false,
        data: {},
    }
]


export const ipReducer = (state: IIP[] = DEFAULT_IPS, action: IIPAction) => {
    switch (action.type) {
        case ADD_IP: {
            return [
                ...state,
                EMPTY_IP,
            ];
        }
        case UPDATE_IP_OBJECT: {
            return [
                ...state.map((ip: IIP, index: number) =>
                    index === action.payload.index ?
                        {...action.payload.ipToUpdate}
                        : ip
                ),
            ];
        }
        case TIMER_TICK: {
            return [
                ...state.map((ip: IIP) =>
                    Timer.shouldTickTimer(ip) ?
                        {...ip,
                        data: {
                            ...ip.data,
                            timezone: {
                                ...ip.data.timezone,
                                current_time: Timer.updateCurrentTime(ip.data.timezone?.current_time)
                            }
                        }}
                        : ip
                ),
            ];
        }
        case SET_IS_SHOW_MODAL: {
            return [...DEFAULT_IPS];
        }
        default:
            return state;
    }
};
