import {useCallback} from 'react';

import {SET_SORTING} from '../../../../../store/actions';
import {SortingProps} from './interface';
import {StyledSortingContainer} from './style';
import {StyledSelect, StyledTitle} from '../style';
import {SORT_TITLE, SORTING_OPTIONS, SORTING_DEFAULT_VALUE} from './constants';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../store/store';

export const Sorting = () => {
  const dispatch = useDispatch();
  const sorting = useSelector<RootState, SortingProps>((state) => state.global.sorting || SORTING_DEFAULT_VALUE);

  const onChangeHandler = useCallback((newValue: unknown) => {
    dispatch({
      type: SET_SORTING,
      payload: (newValue as SortingProps),
    })
  }, []);

    return (
        <StyledSortingContainer>
            <StyledTitle>{SORT_TITLE}</StyledTitle>
          <StyledTitle>Sort by: {sorting.label}</StyledTitle>
          <StyledSelect onChange={onChangeHandler} options={SORTING_OPTIONS} value={sorting} />
        </StyledSortingContainer>
    );
}
