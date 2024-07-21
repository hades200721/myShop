import React from 'react';
import {StyledTitle} from './style';
import {ITitleProps} from './interface';

export const Title: React.FC<ITitleProps> = React.memo(({title}) => {
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    );
});
