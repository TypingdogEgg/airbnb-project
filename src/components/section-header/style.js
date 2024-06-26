import styled from "styled-components";

export const HeaderWrapper = styled.div`
    color: ${p => p.theme.textColor.secondaryColor};

    .content{
        display: flex;
        align-items: center;
        
        &:hover .more{
            visibility: visible;
        }

        .titles{
            /* height: 80px; */
            
            .title{
                font-size: 22px;
                font-weight: 700;
                margin-bottom: 16px;
            }
            .subtitle{
                font-size: 16px;
                margin-bottom: 20px;
            }
        }

        .more{
            visibility: hidden;
            margin-left: 20px;
        }
    }
`