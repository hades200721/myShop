import React from 'react';
import {Time} from '../../../../../common';
import {ITimeZoneProps} from '../../../../../common/time/interface';

interface IFlagProps {
    flag: {
        svg: string;
        png: string;
    },
    timezone: ITimeZoneProps;
}
export const Valid:React.FC<IFlagProps> = ({flag, timezone}) => {

    return (
        <>
            <img src={flag.svg} alt={'flag'} height={16} />
            <Time timezone={timezone} />
        </>
    );
}
