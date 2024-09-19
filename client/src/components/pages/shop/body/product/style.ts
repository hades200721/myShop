import styled from 'styled-components';

export const StyledProductContainer = styled.article`
    border-radius: var(--border-radius);
    box-shadow: rgba(51, 51, 51, 0.05) 0 6px 18px 1px;
    cursor: pointer;
    display: grid;
    flex-flow: column nowrap;
    grid-auto-rows: 1fr 24px 16px 16px 36px;
    height: 430px;
    row-gap: 8px;
`;
