import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {SET_IS_SHOW_MODAL} from '../../../../store/actions';
import {StyledHeaderContainer, StyledTitle, StyledActionIcon} from './style';
import {MODAL_TITLE_TXT} from './constants';
import {Icon} from "../../../common";

export const Header = () => {
    const dispatch = useDispatch();
    const onCloseHandler = useCallback(() => {
        dispatch({
            type: SET_IS_SHOW_MODAL,
            payload: false,
        });
    }, []);

    return (
        <StyledHeaderContainer>
            <StyledTitle>{MODAL_TITLE_TXT}</StyledTitle>
            <StyledActionIcon onClick={onCloseHandler}>
                <Icon icon={faXmark} />
            </StyledActionIcon>
        </StyledHeaderContainer>
    );
}
