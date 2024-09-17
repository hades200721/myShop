import {Sorting} from './sorting';
import {StyledSideBarContainer, StyledTitle} from './style';
import {FILTERS_TXT} from './constants';

export const SideBar = () => {
    return (
        <StyledSideBarContainer>
            <Sorting />
            <StyledTitle>{FILTERS_TXT}</StyledTitle>
        </StyledSideBarContainer>
    );
}
