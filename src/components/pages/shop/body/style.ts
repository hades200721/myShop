import styled from 'styled-components';
import {Button} from '../../../common';

export const StyledBody = styled.div`
    column-gap: 30px;
    display: grid;
    flex-flow: column nowrap;
    grid-area: products;
    grid-template-columns: repeat(6, calc(100% / 6 - 30px / 6*(6 - 1)));
    padding: 0 250px;
    row-gap: 16px;
`;

export const StyledButton = styled(Button)`
    flex-flow: column-reverse;
    font-size: 14px;
    font-weight: normal;
    position: relative;
    row-gap: 12px;
    text-transform: capitalize;
`;

export const StyledNotification = styled.span`
    font-size: 10px;
    line-height: 13px;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    display: inline-block;
    min-width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    right: 4px;
    background: #f55123;
    padding: 2px 3px 1px;
    border-radius: 16px;
`;