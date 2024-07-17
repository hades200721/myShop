import React from 'react';
import {StyledInput, StyledSearchContainer} from './style';

export const Search = () => {

    return (
        <StyledSearchContainer>
            <StyledInput placeholder={'what are you looking for?'} />
        </StyledSearchContainer>
    );
}
