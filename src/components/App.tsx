import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {IPLookup} from './modal/IPLookup';
import {SET_IS_SHOW_MODAL, TIMER_TICK} from '../store/actions';
import {IModalObject} from '../interface';
import {TIMER_TICK_INTERVAL_MILLISECONDS} from '../constants';

export const App = React.memo(() => {
    const dispatch = useDispatch();
    const {isShowModal} = useSelector<RootState, IModalObject>((state) => state.modal);
    const timersCount = useSelector<RootState, number>((state) => state.counter.timers);

    const [intervalTick, setIntervalTick] = useState<number>(0);

    const onToggleHandler = useCallback((e: React.BaseSyntheticEvent) => {
        dispatch({
            type: SET_IS_SHOW_MODAL,
            payload: !isShowModal,
        });
        e.stopPropagation();
    }, [dispatch, isShowModal]);

    const intervalTickCallback = useCallback(() => {
        const intervalTick = window.setInterval(() => {
            dispatch({
                type: TIMER_TICK,
                payload: {},
            });
        }, TIMER_TICK_INTERVAL_MILLISECONDS);
        setIntervalTick(intervalTick);
    }, []);

    useEffect(() => {
        if (!intervalTick && timersCount > 0) {
            intervalTickCallback();
        }
        if (timersCount <= 0) {
            clearInterval(intervalTick);
        }
    }, [timersCount]);

    return (
        <main>
            <button onClick={onToggleHandler}>Show/Hide Modal</button>
            {isShowModal && <IPLookup/>}
        </main>
    );
});
