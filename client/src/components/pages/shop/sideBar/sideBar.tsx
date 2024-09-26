import {Sorting} from './sorting';
import {FILTERS, FILTERS_TXT, componentByType} from './constants';
import {Container} from '../../../filters/container';
import {StyledSideBarContainer, StyledTitle} from './style';

export const SideBar = () => {
  return (
    <StyledSideBarContainer>
      <Sorting />
      <StyledTitle>{FILTERS_TXT}</StyledTitle>
      {Object.entries(FILTERS).map(filter => {
          const filterKey = filter[0];
          const filterData = filter[1];
          return (<Container key={filterKey} label={filterData.label}>
            {componentByType(filterData.type, filterData.props)}
          </Container>)
        }
      )}
    </StyledSideBarContainer>
  );
};
