import React, {BaseSyntheticEvent, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RangeFilterProps} from './interface';
import {StyledRangeContainer, StyledNumberInput, StyledLabel} from './style';
import {RootState} from '../../../store/store';
import {IFilters} from '../../../interface';
import {SET_FILTER_BY_KEY} from '../../../store/actions';

export const Range: React.FC<RangeFilterProps> = ({id, min, max}) => {
  const dispatch = useDispatch();
  const filterValue = useSelector<RootState, IFilters>(state => state.global.filters[id] || {});
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const onChangeHandler = useCallback((e: BaseSyntheticEvent) => {
    const {id, value} = e.target;
    if (!isNaN(value)) {
      if (id === 'max') {
        setMaxVal(Number(value));
      } else {
        setMinVal(Number(value));
      }
    }
  }, [id, filterValue]);

  const onSetRangeFilterHandler = useCallback(() => {
    dispatch({
      type: SET_FILTER_BY_KEY,
      payload: {
        id,
        value: {
          min: minVal,
          max: maxVal,
        },
      },
    })
  }, [minVal, maxVal]);

  return (
    <StyledRangeContainer onClick={e => e.stopPropagation()}>
      <StyledNumberInput id={'min'} type='number' onChange={onChangeHandler} value={minVal || ''} />
      <StyledLabel>-</StyledLabel>
      <StyledNumberInput id={'max'} type='number' onChange={onChangeHandler} value={maxVal || ''} />
      <button onClick={onSetRangeFilterHandler}>okay</button>
    </StyledRangeContainer>
  );
};
