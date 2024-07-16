import styled from 'styled-components';

export const StyledFooterContainer = styled.div`
    border-top: 1px solid var(--bgcolor-greyScale3);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin: 0 16px;
    max-height: 500px;
    overflow-y: auto;
    padding: 16px 0;
    row-gap: 8px;
`;

export const StyledSingleIp = styled.div`
    align-items: center;
    column-gap: 16px;
    display: flex;
    height: 32px;
`;

export const StyledIndex = styled.span`
    border-radius: 50%;
    background-color: var(--bgcolor-greyScale6);
    text-align: center;
    line-height: 32px;
    width: 32px;
`;

interface elementProps {
    inValid: boolean;
}

export const StyledInput = styled.input`
    background-color: var(--bgcolor-greyScale9);
    border: 2px solid ${(props: elementProps) => props.inValid ? 'var(--negative-1)' : 'unset'};
    border-radius: 5px;
    color: var(--text-color-main);
    font-size: 16px;
    height: 24px;
    margin: 0;
    text-indent: 8px;
    width: 200px;
    :focus-visible {
        outline: unset;
    }
    :focus {
        border-color: blue;
    }
`;
