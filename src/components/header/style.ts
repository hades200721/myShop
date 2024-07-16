import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
    align-items: center;
    background: linear-gradient(0deg, #ffbd3e -12.97%, #ed3cca 58.5%, #7c1af8 150.44%);
    grid-area: header;
    overflow: hidden;
`;

export const StyledHeaderContent = styled.div`
    color: var(--bgcolor-greyScale10);
    display: flex;
    font-size: 18px;
    font-weight: 700;
    margin: 0 auto;
    max-width: 1500px;
`;

export const StyledLeftPart = styled.div`
    display: flex;
    column-gap: 8px;
    flex: 1 1 auto;
    flex-flow: row nowrap;
`;

export const StyledBtnGroup = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
`;
