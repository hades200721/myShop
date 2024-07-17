import styled from 'styled-components';

export const StyledSearchContainer = styled.div`
    height: 32px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    width: 550px;
`;

export const StyledInput = styled.input`
    border: unset;
    height: 32px;
    text-indent: 12px;
    :focus {
        border: unset;
        outline: unset;
    }
`;
