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
            data-testid='custom-button'
            className={className}
            {...props}
        >
            <span data-testid='custom-button-text'>{label}</span>
            {children}
        </StyledButton>
    );
};
