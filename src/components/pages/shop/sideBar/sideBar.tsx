import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {SET_IS_SHOW_MODAL} from '../../../../store/actions';
import {StyledSideBarContainer, StyledTitle} from './style';
import {MODAL_TITLE_TXT} from './constants';

export const SideBar = () => {
    const dispatch = useDispatch();
    const onCloseHandler = useCallback(() => {
        dispatch({
            type: SET_IS_SHOW_MODAL,
            payload: false,
        });
    }, []);

    return (
        <StyledSideBarContainer>
            <StyledTitle>{MODAL_TITLE_TXT}</StyledTitle>
        </StyledSideBarContainer>
    );
}
