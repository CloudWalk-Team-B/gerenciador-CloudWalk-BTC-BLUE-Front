import styled from "styled-components";

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-size: 1.6em;

    img{
        height: 28%;
        animation: rotate 3s linear infinite;
    }

    @keyframes rotate {
				from {
					transform: rotate(0deg);
				}

				to {
					transform: rotate(359deg);
				}
			}
  
`;
