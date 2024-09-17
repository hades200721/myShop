import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {debounce} from 'underscore';
import {StyledInput, StyledSearchContainer} from './style';
import {RootState} from '../../../store/store';
import {IFilters} from '../../../interface';
import {SET_FILTER_SEARCH_QUERY} from '../../../store/actions';

export const Search = () => {
  const dispatch = useDispatch();
  const globalFilters = useSelector<RootState, IFilters>((state) => state.global.filters);

  const onChangeHandler = useCallback((event) => {
    dispatch({
      type: SET_FILTER_SEARCH_QUERY,
      payload: event.target.value,
    })
  }, []);

  return (
    <StyledSearchContainer>
      <StyledInput
        value={globalFilters.searchQuery}
        onChange={onChangeHandler}
        placeholder={'what are you looking for?'} />
    </StyledSearchContainer>
  );
};
