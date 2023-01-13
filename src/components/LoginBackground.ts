import styled from "styled-components";
import loginBackgroundUSrc from '../assets/login-background.jpg';

export const LoginBackground = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
height: 100vh;
overflow-y: auto;
padding: 50px;
padding-top: 120px;
background: ${({ theme }) => theme.color.masala};
background: url(${loginBackgroundUSrc});
background-size: cover;
color: ${({ theme }) => theme.color.white};
`;
