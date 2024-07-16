import React from 'react';
import {StyledTime} from './style';
import {ITimeZoneProps} from './interface';

interface ITimeProps {
    timezone: ITimeZoneProps
}

export const Time: React.FC<ITimeProps> = ({timezone}) => {
    return (
        <StyledTime>
            {timezone.current_time} (GMT {timezone.gmt_offset > 0 ? `+${timezone.gmt_offset}` : timezone.gmt_offset})
        </StyledTime>
    );
};
