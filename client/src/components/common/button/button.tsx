import React from 'react';
import {ButtonProps} from './interface';
import {StyledButton} from './style';

export const Button: React.FC<ButtonProps> = ({
                           className,
                           label,
                            children,
                           ...props
                       }) => {
    return (
        <StyledButton
            className={className}
            {...props}
        >
            <span>{label}</span>
            {children}
        </StyledButton>
    );
};
