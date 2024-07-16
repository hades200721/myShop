import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
    align-items: center;
    background: var(--bgcolor-greyScale7);
    color: var(--text-color-main);
    grid-area: footer;
    justify-content: space-between;
    overflow: hidden;
    padding: 8px 0 16px 0;
`;

export const StyledHeaderContent = styled.span`
    font-size: 18px;
    font-weight: 700;
    max-width: 1500px;
`;
