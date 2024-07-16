import styled from 'styled-components';
import {Button} from '../../../common';

export const StyledBody = styled.div`
    display: grid;
    flex-flow: column nowrap;
    padding: 12px;
    row-gap: 16px;
`;

export const StyledButton = styled(Button)`
    flex-flow: row-reverse;
`;