import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${props => props.bgColor};
    text-align: center;
    display: inline-block;
    border-radius: 6px;
    height: 100%;
    width: 32px;
    cursor: pointer;
`;

export const Text = styled.p`
    margin: 6px 0;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
`;

export const Selection = styled.input`
    cursor: pointer;

    &.dont-select {
        pointer-events: none;
    }
`;