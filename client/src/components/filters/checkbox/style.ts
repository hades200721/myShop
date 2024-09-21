import styled from 'styled-components';

export const StyledFilterContainer = styled.div`
    background: white;
    border-bottom: 1px solid var(--bgcolor-greyScale7);
    display: flex;
    flex-flow: column;
    margin-top: var(--medium-size);
    overflow: hidden;
    width: 100%;
`;

export const StyledFilterHeader  = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
`;
