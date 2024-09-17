import styled from 'styled-components';

export const StyledSearchContainer = styled.div`
    background: white;
    border-radius: 12px;
    flex: 1 1 auto;
    margin: 12px 0;
    overflow: hidden;
    place-content: center;
    width: 750px;

`;

export const StyledInput = styled.input`
    border: unset;
    height: 32px;
    text-indent: 12px;
    width: 100%;
    :focus {
        border: unset;
        outline: unset;
    }
`;
