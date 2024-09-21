import {BaseSyntheticEvent, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyledInput, StyledSearchContainer} from './style';
import {RootState} from '../../../store/store';
import {IFilters} from '../../../interface';
import {SET_FILTER_BY_KEY} from '../../../store/actions';

export const Search = () => {
  const dispatch = useDispatch();
  const globalFilters = useSelector<RootState, IFilters>((state) => state.global.filters);

  const onChangeHandler = useCallback((event: BaseSyntheticEvent) => {
    dispatch({
      type: SET_FILTER_BY_KEY,
      payload: {
        id: 'searchQuery',
        value: event.target.value,
      },
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
