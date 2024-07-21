import {StyledSideBarContainer, StyledTitle} from './style';
import {MODAL_TITLE_TXT} from './constants';

export const SideBar = () => {
    return (
        <StyledSideBarContainer>
            <StyledTitle>{MODAL_TITLE_TXT}</StyledTitle>
        </StyledSideBarContainer>
    );
}
