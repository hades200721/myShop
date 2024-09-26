import React from 'react';
import {StyledRating, StyledRatingCount} from './style';
import {IRating} from '../../../../../../interface/IProduct';

export const Rating: React.FC<IRating> = React.memo(({rate, count}) => {
    return (
        <StyledRating>
            <b>{rate}</b>
            <StyledRatingCount>Buyers: {count}</StyledRatingCount>
        </StyledRating>
    );
});
