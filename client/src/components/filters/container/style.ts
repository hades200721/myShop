import styled from 'styled-components';

export const StyledFilterContainer = styled.div`
    border-bottom: 1px solid var(--bgcolor-greyScale8);
    display: flex;
    flex-flow: column;
    margin-top: var(--medium-size);
    padding-bottom: var(--medium-size);
    overflow: hidden;
    width: 100%;
`;

export const StyledFilterHeader  = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--small-size);
`;
