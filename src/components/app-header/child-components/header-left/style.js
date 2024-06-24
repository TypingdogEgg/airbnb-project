import styled from "styled-components";

export const LeftWrapper = styled.div`
    flex:1;
    .logo{
        width: 102px;
        color: ${props=>props.theme.color.primaryColor};
        cursor: pointer;
    }
`