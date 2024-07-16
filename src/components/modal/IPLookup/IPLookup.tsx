import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Body} from './body/body';
import {Header} from './header';
import {Footer} from './footer';
import {isClickedOutside, isEscPressed} from '../../../utils/modal';
import {StyledPage} from './style';
import {SET_IS_SHOW_MODAL} from '../../../store/actions';

export const IPLookup = React.memo(() => {
    const dispatch = useDispatch();
    const modalRef = useRef<HTMLInputElement | null>(null);

    const handleClickEvent = useCallback(({target}: MouseEvent): void => {
        if (modalRef.current) {
            if (isClickedOutside((target as Node), modalRef)) {
                dispatch({
                    type: SET_IS_SHOW_MODAL,
                    payload: false,
                });
            }
        }
    }, [dispatch, modalRef]);

    const handleKeyDownEvent = useCallback((event: KeyboardEvent) => {
        if (isEscPressed(event)) {
            dispatch({
                type: SET_IS_SHOW_MODAL,
                payload: false,
            });
        }
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener('click', handleClickEvent);
        document.addEventListener('keydown', handleKeyDownEvent);
        return () => {
            document.removeEventListener('click', handleClickEvent);
            document.removeEventListener('keydown', handleKeyDownEvent);
        };
    }, [dispatch, handleClickEvent, handleKeyDownEvent]);

    return (
        <StyledPage ref={modalRef} >
            <Header/>
            <Body />
            <Footer/>
        </StyledPage>
    );
});

