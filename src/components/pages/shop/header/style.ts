import styled from 'styled-components';

export const StyledFooterContainer = styled.div`
    background-color: yellow;
    border-top: 1px solid var(--bgcolor-greyScale3);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    grid-area: header;
    max-height: 500px;
    overflow-y: auto;
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
