import styled from 'styled-components';

export const StyledProductContainer = styled.div`
    border-radius: var(--border-radius);
    box-shadow: rgba(51, 51, 51, 0.05) 0 6px 18px 1px;
    cursor: pointer;
    display: grid;
    flex-flow: column nowrap;
    grid-auto-rows: 1fr 40px 18px 36px;
    height: 420px;
    overflow: hidden;
    row-gap: 8px;
`;
