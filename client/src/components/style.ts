import styled from 'styled-components';

export const StyledLayout = styled.div`
    display: grid;
    grid-template-areas: 
        "header"
        "body"
        "footer";
    grid-template-rows: 110px 1fr 100px;
    height: 100vh;
`;
