import React from 'react';
import {StyledTitle} from './style.ts';
import {ITitleProps} from './interface.ts';

export const Description: React.FC<ITitleProps> = ({title}) => {
    return (
        <StyledTitle title={title}>
            {title}
        </StyledTitle>
    );
}
