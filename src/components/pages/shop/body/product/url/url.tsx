import React from 'react';
import {StyledUrl} from './style';
import {IURLProps} from './interface';

export const Url: React.FC<IURLProps> = ({url}) => {
    return (
        <StyledUrl href={url} target='_blank'>{url}</StyledUrl>
    );
}
