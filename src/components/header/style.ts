import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
    align-items: center;
    background: linear-gradient(0deg, #ffbd3e -12.97%, #ed3cca 58.5%, #7c1af8 150.44%);
    color: var(--bgcolor-greyScale10);
    display: flex;
    grid-area: header;
    overflow: hidden;
`;

export const StyledHeaderContent = styled.div`
    column-gap: 12px;
    display: flex;
    font-size: 18px;
    font-weight: 700;
    margin: 0 auto;
    max-width: 1500px;
    width: 100%;
`;

export const StyledTitle = styled.div`
    cursor: pointer;
    font-size: 48px;
    place-self: center;
`;
