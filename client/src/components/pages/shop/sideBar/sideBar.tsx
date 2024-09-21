import {Sorting} from './sorting';
import {FILTERS, FILTERS_TXT} from './constants';
import {Container} from '../../../filters/container';
import {StyledSideBarContainer, StyledTitle} from './style';

export const SideBar = () => {
  return (
    <StyledSideBarContainer>
      <Sorting />
      <StyledTitle>{FILTERS_TXT}</StyledTitle>
      {FILTERS.map( filter =>
        <Container key={filter.key} label={filter.label}>
          {filter.component}
        </Container>
      )}
    </StyledSideBarContainer>
  );
};
