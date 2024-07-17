import styled from 'styled-components';

export const StyledSideBarContainer = styled.div`
    align-items: center;
    background-color: green;
    border-bottom: 1px solid var(--bgcolor-greyScale3);
    column-gap: 8px;
    display: flex;
    grid-area: side-bar;
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
