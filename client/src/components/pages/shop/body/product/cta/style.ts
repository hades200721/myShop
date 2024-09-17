import styled from 'styled-components';
import {Button} from '../../../../../common';

export const StyledButton = styled(Button)`
    background-color: #A63BFD;
    color: var(--bgcolor-greyScale10);
    column-gap: 12px;
    font-size: 14px;
    font-weight: normal;
    position: relative;
    text-transform: capitalize;
    width: 100%;
    &:hover {
        font-weight: bold;
    }
`;
