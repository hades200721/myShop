import React, {BaseSyntheticEvent, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CheckboxFilterProps, IOption} from './interface';
import {SET_FILTER_BY_KEY} from '../../../store/actions';
import {StyledFilterContainer} from './style';
import {RootState} from '../../../store/store';
import {IFilters} from '../../../interface';

export const Checkbox: React.FC<CheckboxFilterProps> = ({id, options}) => {
  const dispatch = useDispatch();
  const filterValue = useSelector<RootState, IFilters>(state => state.global.filters[id] || {});

  const onToggleHandler = useCallback((e: BaseSyntheticEvent) => {
    const {target} = e;
    const {checked} = target;
    const value = {
      ...filterValue,
      [target.id]: checked,
    };
    dispatch({
      type: SET_FILTER_BY_KEY,
      payload: {
        id,
        value,
      },
    })
    e.stopPropagation();
  }, [id, filterValue]);

  return (
    <StyledFilterContainer onClick={onToggleHandler}>
      {options.map((option: IOption) => <div key={option.key}>
        <label>{option.name}
          <input type='checkbox' onChange={onToggleHandler} id={option.key} checked={filterValue[option.key] || false} />
        </label>
      </div>)}
    </StyledFilterContainer>
  );
};
