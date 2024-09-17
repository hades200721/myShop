import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const StyledFooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    input {
        width: 100%;
    }
`;

export const StyledBodyContainer = styled.div`
    align-self: flex-start;
    flex: 1 1 auto;
    flex-flow: column;
    padding: 10px;
    overflow-y: auto;
`;
