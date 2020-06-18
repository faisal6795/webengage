import styled from 'styled-components';

export const Container = styled.div`
    width: 450px;
    margin: auto;
    margin-top: 8px;
    position: relative;
    user-select: none;

    &:before, &:after {
        z-index: -1;
        position: absolute;
        content: "";
        bottom: 15px;
        left: 10px;
        width: 40%;
        top: 80%;
        max-width:300px;
        background: #777;
        box-shadow: 0 15px 10px #222;
        transform: rotate(-3deg);
    }
    
    &:after {
        transform: rotate(3deg);
        right: 10px;
        left: auto;
    }
`;

export const Header = styled.div`
    background-image: url(${props => props.logo});
    height: 68px;
    background-repeat: no-repeat;
    background-size: 55%;
    background-position: center 16px;
    padding: 16px 20%;
    margin: auto;
    border-top: 5px solid #73f440;
    box-sizing: border-box;
`;

export const Body = styled.div`
    background-color: #eff1f6;
    border-top: 2px solid #e0e0e0;
    padding: 32px;
    padding-top: 12px;
    text-align: center;
`;

export const Description = styled.h3`
    font-size: 12px;
    font-weight: 900;
    margin-top: 0;
`;

export const Message = styled.h2`
    margin-top: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
`;

export const CardsWrapper = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
`;

export const SmallMessage = styled.p`
    margin: 0;
    font-size: 13px;
    float: left;
    margin-top: 4px;
    font-weight: 500;
    color: #57c177;
`;

export const LeftMessage = styled(SmallMessage)``;

export const RightMessage = styled(SmallMessage)`
    color: #ed6f67;
    float: right;
`;

export const ButtonWrapper = styled.div`
    padding: 12px;
    text-align: center;
    background-color: #fff;
`;

export const SubmitBtn = styled.button`
    width: 55%;
    height: 32px;
    background-image: linear-gradient(#6de83c, #56b530);
    border: 1px solid #4ca52a;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
`;