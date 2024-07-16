import styled from 'styled-components';
export const StyledButton = styled.button`
    align-items: center;
    background-color: var(--bg-primary-cta);
    border: 0;
    border-radius: 4px;
    color: var(--bgcolor-greyScale10);
    column-gap: 8px;
    cursor: pointer;
    display: flex;
    font-size: 12px;
    font-weight: 700;
    justify-content: center;
    line-height: 1;
    padding: 10px 16px;
    width: fit-content;

    :disabled {
        cursor: not-allowed;
        opacity: 0.3;
    }
`;
