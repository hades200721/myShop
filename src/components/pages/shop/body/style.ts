import styled from 'styled-components';
import {Button} from '../../../common';

export const StyledBody = styled.div`
    background-color: red;
    flex-flow: column nowrap;
    grid-area: products;
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