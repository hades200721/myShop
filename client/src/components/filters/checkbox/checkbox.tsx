import React, {BaseSyntheticEvent, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CheckboxFilterProps, IOption} from './interface';
import {SET_FILTER_BY_KEY} from '../../../store/actions';
import {StyledCheckboxContainer} from './style';
import {RootState} from '../../../store/store';

export const Checkbox: React.FC<CheckboxFilterProps> = ({id, options}) => {
  const dispatch = useDispatch();
  const filterValue = useSelector<RootState, any[]>(state => state.global.filters[id] || []);

  const onToggleHandler = useCallback((e: BaseSyntheticEvent) => {
    const {target} = e;
    const {checked} = target;
    const values = checked ? [...filterValue, Number(target.id)] : filterValue.filter(value => value !== Number(target.id));
    dispatch({
      type: SET_FILTER_BY_KEY,
      payload: {
        id,
        value: values,
      },
    });
    e.stopPropagation();
  }, [id, filterValue]);

  return (
    <StyledCheckboxContainer onClick={onToggleHandler}>
      {options.map((option: IOption) => <div key={option.key}>
        <label>{option.name}
          <input type='checkbox' onChange={onToggleHandler} id={option.key} checked={filterValue.includes(option.key) || false} />
        </label>
      </div>)}
    </StyledCheckboxContainer>
  );
};
