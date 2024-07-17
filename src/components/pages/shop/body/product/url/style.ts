import styled from 'styled-components';

export const StyledUrl = styled.a`
    color: var(--text-color-secondary);
    text-decoration: none;
    text-indent: 8px;
    &:hover {
        text-decoration: underline;
    }
    &:visited {
        color: var(--text-color-visited-link);        
    }
`;