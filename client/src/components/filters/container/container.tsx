import React, {useCallback, useState} from 'react';
import {Icon} from '../../common';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {FilterProps} from './interface';
import {StyledFilterContainer, StyledFilterHeader} from './style';

export const Container: React.FC<FilterProps> = ({label, children}) => {
  const [isExpand, setIsExpand] = useState(true);

  const onToggleHandler = useCallback(() => {
    setIsExpand(prevVal => !prevVal);
  }, []);

  return (
    <StyledFilterContainer onClick={onToggleHandler}>
      <StyledFilterHeader>
        <span>{label}</span>
        <Icon icon={isExpand ? faChevronUp : faChevronDown}></Icon>
      </StyledFilterHeader>
      {isExpand && children}
    </StyledFilterContainer>
  );
};
