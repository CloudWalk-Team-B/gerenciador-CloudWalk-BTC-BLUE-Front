import styled,{css} from "styled-components";

export const LoginCardContainer = styled.div`
    ${({theme})=> css`

        display:flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100%;

            img{
                width: 16.125rem;
                height: 14.688rem;

            }

            h2{
                color: ${theme.colors.primaryColor};
                font-size: 50px;
                margin-top: 0;
            }
            div{
                display: flex;
                flex-direction: column;
                border: 1px solid ${theme.colors.primaryColor};
                width: 46rem;
                height: 41.75rem;
                border-radius: 15px;
                margin-bottom: 91px;

                p{
                    font-size: 40px;
                    margin-left: 2.5rem;
                    margin-top: 2.5rem;
                    font-weight: 800;   
                }

                form{
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    input{
                        all: unset;
                        border: 1px solid ${theme.colors.primaryColor};;
                        width: 35rem;
                        height: 3.5rem;
                        border-radius: 3.125rem;
                        margin-bottom: 2.5rem;
                        padding: 0 2.5rem;
                        box-sizing: border-box;
                        font-size: 1.5rem;
                    }

                    p{
                        color: ${theme.colors.primaryColor};
                        font-size: 1rem;
                        margin-top: -2rem;
                        margin-left: -22rem;
                        cursor: pointer;
                    }

                    button{
                        background-color: ${theme.colors.primaryColor};
                        color: ${theme.colors.textColor};
                        text-decoration: none;
                        border: none;
                        cursor: pointer;
                        height: 3rem;
                        width: 12rem;
                        font-size: 1.5rem;
                        border-radius: 3.125rem;
                        margin-top: 3rem;
                    }
                }
            }
        `}
`;