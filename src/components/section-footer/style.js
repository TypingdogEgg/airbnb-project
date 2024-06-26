import styled from "styled-components";

export const FooterWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${props=>props.color};

    .text{
        font-size: 16px;
        font-weight: 700;
        margin-right: 5px;
    }
    
    &:hover{
        text-decoration: underline;
    }
`