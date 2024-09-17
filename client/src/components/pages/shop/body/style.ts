import styled from 'styled-components';
import {Button} from '../../../common';

export const StyledBody = styled.div`
    height: 900px;
    column-gap: 30px;
    display: grid;
    flex-flow: column nowrap;
    grid-area: products;
    grid-template-columns: repeat(var(--horizontal-items), calc(100% / var(--horizontal-items) - 30px / var(--horizontal-items)*(var(--horizontal-items) - 1)));
    margin: 24px 0;
    overflow: auto;
    padding: 0 250px;
    row-gap: 16px;
`;

export const StyledButton = styled(Button)`
    ${({color}) => !!color ? color : 'unset'};
    flex-flow: column-reverse;
    font-size: 14px;
    font-weight: normal;
    position: relative;
    row-gap: 12px;
    text-transform: capitalize;
`;

export const StyledNotification = styled.span`
    background-color: Tomato;
`;
