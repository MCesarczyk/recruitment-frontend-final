import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface StyledButtonProps {
  disabled?: boolean;
  primary?: boolean;
};

export interface ButtonProps extends StyledButtonProps {
  children: ReactNode,
  type?: "button" | "submit" | "reset",
  onClick?: (event: React.SyntheticEvent) => void
};

export const Button = ({ children, type, onClick, disabled, primary }: ButtonProps) => {
  return (
    <StyledButton
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
      primary={primary}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.masala};
  width: 120px;
  height: 40px;
  border-radius: 20px;
  margin: 0.5rem 0;
  outline: none;
  border: none;
  padding: 0 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 36px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: background-color ease-in-out 300ms;
  user-select: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   
   &:hover {
     background-color: ${({ theme }) => theme.color.doveGray};
    }
    
    &:disabled {
      background-color: ${({ theme }) => theme.color.silver};
      pointer-events: none;
    }
    
    ${({ primary }) => primary && css`
      background-color: ${({ theme }) => theme.color.primary};
      
      &:hover {
        background-color: ${({ theme }) => theme.color.primaryDark};
      }
      
      &:disabled {
        background-color: ${({ theme }) => theme.color.silver};
        pointer-events: none;
      }
    `}
`;
