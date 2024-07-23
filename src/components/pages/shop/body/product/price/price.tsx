import React from 'react';
import {StyledPrice, StyledDiscount} from './style';
import {IPriceProps} from './interface';

export const Price: React.FC<IPriceProps> = React.memo(({price}) => {
    return (
        <StyledPrice>
            <b>{price*0.9}</b>$
            <StyledDiscount>{price}$</StyledDiscount>
        </StyledPrice>
    );
});
