import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
    align-items: center;
    border-bottom: 1px solid var(--bgcolor-greyScale3);
    column-gap: 8px;
    display: flex;
    height: 40px;
    justify-content: space-between;
    padding: 0 16px;
`;

export const StyledTitle = styled.span`
    color: var(--text-color-main);
    font-size: 18px;
    font-weight: 700;
`;

export const StyledActionIcon = styled.span`
    color: var(--bgcolor-greyScale3);
    cursor: pointer;
    font-size: 16px;
    margin: 0;
    transform: unset;
`;
