import React from 'react';
import {IURLProps} from './interface';
import {StyledButton} from './style';
import {Icon} from '../../../../../common';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

export const Cta: React.FC<IURLProps> = ({onClick}) => {
    return (

      <StyledButton onClick={onClick} label={'add to basket'} color={'red'}>
          <Icon icon={faCartShopping} size={'xl'} />
      </StyledButton>

    );
}
