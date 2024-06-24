import styled from "styled-components";

export const CenterWrapper = styled.div`
    .search-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;
        height: 48px;
        padding-left: 20px;
        border: 1px solid #ccc;
        border-radius: 25px;
        ${p=>p.theme.mixin.boxShadow}

        .text{
            font-weight: 700;
        }

        .search-icon{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 5px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: ${p=>p.theme.color.primaryColor};
            color: #fff;
        }
    }

`