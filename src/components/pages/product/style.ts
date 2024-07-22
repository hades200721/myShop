import styled from 'styled-components';

export const StyledLayout = styled.div`
    display: grid;
    grid-template-areas: 
        "navigations"
        "main"
        "reviews"
        "similar-products";
    grid-template-columns: 110px 1fr 100px;
`;
