import styled from "styled-components";

export const FooterWrapper = styled.div`
    height: 250px;
    padding-top: 50px;
    background-color: ${p=>p.theme.bg.shadow};
    
    .list{
        width: 80%;
        margin: 0 auto;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
        
        .column{
            .name{
                font-weight: 700;
                margin-bottom: 20px;
            }
            .row{
                margin-bottom: 10px;
                cursor: pointer;

                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }

    .under{
        margin-top: 10px;
        text-align: center;
        font-size: 14px;
        color: #777;
    }
    
`