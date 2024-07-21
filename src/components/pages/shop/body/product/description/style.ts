import styled from 'styled-components';
import {TextEllipsisStyle} from '../../../../../../assets/style/general';

export const StyledTitle = styled.div`
    ${TextEllipsisStyle};
    align-self: center;
    color: var(--text-color-main);
    display: block;
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    overflow: hidden;
    text-align: left;
    text-indent: 16px;
    text-overflow: ellipsis;
`;
