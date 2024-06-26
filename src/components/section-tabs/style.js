import styled from "styled-components";

export const TabsWrapper = styled.div`
    display: flex;

    .tab{
        /* flex-basis: 100px; */
        padding: 0 10px;
        min-width: 80px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        margin-right: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        cursor: pointer;

        ${props=>props.theme.mixin.boxShadow}

        &.active{
        background-color: ${props => props.theme.color.primaryColor};
            color:#fff;
        }
    }
    
    `