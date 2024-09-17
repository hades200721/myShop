import styled from 'styled-components';

export const StyledPage = styled.div`
    background: var(--bgcolor-greyScale9);
    box-sizing: border-box;
    display: grid;
    grid-area: body;
    height: 100%;
    grid-template-areas: "side-bar products";
    grid-template-columns: 320px 1fr;
`;
