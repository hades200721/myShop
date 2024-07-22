import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {StyledSortingContainer} from './style';
import {StyledTitle} from '../style';
import {SORT_TITLE} from '../constants';

export const Sorting = () => {
  const [searchParams] = useSearchParams();
  const [sortByValue, setSortByValue] = useState('');

  useEffect(() => {
    setSortByValue(searchParams.get('search') || '');
  }, [searchParams]);

    return (
        <StyledSortingContainer>
            <StyledTitle>{SORT_TITLE}</StyledTitle>
          <StyledTitle>Sort by: {sortByValue}</StyledTitle>
        </StyledSortingContainer>
    );
}
