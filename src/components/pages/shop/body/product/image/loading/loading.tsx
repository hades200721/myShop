import React from 'react';
import LoadingSpinner from '../../../../../../../assets/loadingSpinner.svg';

interface ILoadingProps {
    isShow: boolean;
}

export const Loading: React.FC<ILoadingProps> = ({isShow}) => {
    return !isShow ? <></> :
            <LoadingSpinner />
};
