import React from 'react';
import {StyledTitle} from './style.ts';
import {ITitleProps} from './interface.ts';

export const Title: React.FC<ITitleProps> = ({title}) => {
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    );
}
