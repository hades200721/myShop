import {useCallback, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {StyledSortingContainer} from './style';
import {StyledSelect, StyledTitle} from '../style';
import {SORT_TITLE, SORTING_OPTIONS, SORTING_KEY, SORTING_DEFAULT_VALUE} from './constants';

export const Sorting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortByValue, setSortByValue] = useState(SORTING_DEFAULT_VALUE);

  useEffect(() => {
    setSortByValue(searchParams.get(SORTING_KEY) || SORTING_DEFAULT_VALUE);
  }, [searchParams]);

  const onChangeHandler = useCallback(({value}) => {
    const searchParamsToSet = {
      ...Object.fromEntries([...searchParams]),
      sorting: value,
    }
    setSearchParams(searchParamsToSet);
  }, []);

    return (
        <StyledSortingContainer>
            <StyledTitle>{SORT_TITLE}</StyledTitle>
          <StyledTitle>Sort by: {sortByValue}</StyledTitle>
          <StyledSelect onChange={onChangeHandler} options={SORTING_OPTIONS} value={sortByValue} />
        </StyledSortingContainer>
    );
}
