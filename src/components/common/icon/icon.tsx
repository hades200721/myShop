import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProps} from './interface';

export const Icon: React.FC<IconProps> = ({
                           className,
                           icon,
                       }) => {
    return (
        <FontAwesomeIcon
            className={className}
            icon={icon}
        />
    );
};
