import Select from 'react-select';
import styled from 'styled-components';

export const StyledSideBarContainer = styled.div`
    align-items: center;
    background: linear-gradient(0deg, #ffbd3e -12.97%, #d7cbd5 58.5%, #5a338b 150.44%);
    column-gap: 8px;
    display: flex;
    flex-flow: column;
    grid-area: side-bar;
    padding: 0 var(--small-size);
`;

export const StyledSelect = styled(Select)`
    margin: 0 16px;
    width: 100%;
`;

export const StyledTitle = styled.div`
    color: var(--text-color-main);
    font-size: 18px;
    font-weight: 700;
`;
