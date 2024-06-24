import styled from "styled-components";

export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${p=>p.theme.textColor.primaryColor};

    .global{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 5px;
        cursor: pointer;

        &:hover{
            background-color: ${p=>p.theme.bg.shadow};
        }
    }

    .profile{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 85px;
        height: 48px;
        border: 1px solid #ccc;
        border-radius: 25px;
        cursor: pointer;

        ${p=>p.theme.mixin.boxShadow}

        .panel{
            position: absolute;
            top: 55px;
            right: 0;
            width: 240px;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0 0 15px rgba(0,0,0,.18);

            .top{
                padding: 10px 0;
                border-bottom: 1px solid #ccc;

                .register{
                    font-weight: 700;
                }
            }
            .bottom{
                padding: 10px 0;
            }

            .item{
                height: 42px;
                line-height: 40px;
                padding-left: 10px;

                &:hover{
                    background-color: ${p=>p.theme.bg.shadow};
                }
            }
        }
    }
`