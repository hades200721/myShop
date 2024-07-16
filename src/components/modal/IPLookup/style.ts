import styled from 'styled-components';

export const StyledPage = styled.div`
    background: var(--bgcolor-greyScale9);
    border-radius: 10px;
    box-shadow: 0 6px 14px 1px rgba(51,51,51,0.3);
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    height: auto;
    left: 50%;
    padding-bottom: 56px;
    position: fixed;
    row-gap: 8px;
    top: 50%;
    width: 500px;
    transform: translate3d(-50%, -50%, 0);
    z-index: 1;
`;
