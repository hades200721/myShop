import styled from 'styled-components';

export const StyledPage = styled.div`
    background: var(--bgcolor-greyScale9);
    box-sizing: border-box;
    display: grid;
    height: 100%;
    grid-template-areas: 
        "side-bar header"
        "side-bar products";
    grid-template-columns: 320px 1fr;
    grid-template-rows: 110px 1fr;
`;
