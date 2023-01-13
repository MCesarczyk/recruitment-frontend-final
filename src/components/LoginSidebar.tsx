import { ReactNode } from 'react';
import styled from 'styled-components';
import whiteLogoSrc from '../assets/rsom-logo-white.svg';

interface LoginSidebarProps {
  children: ReactNode;
};

export const LoginSidebar = ({ children }: LoginSidebarProps) => (
  <Sidebar>
    <Logo src={whiteLogoSrc} />
    {children}
    <LoginFooter>
      <LoginFooterContent>
        <strong>New to RSOM?</strong><br />
        Request access to the demo <a href="https://rsom.azurewebsites.net/request-access" target="_blank" rel="noopener noreferrer">here</a>.
      </LoginFooterContent>
    </LoginFooter>
  </Sidebar>
);

export const Sidebar = styled.nav`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-grow: 1;
  max-width: 300px;
  min-width: 300px;
  box-sizing: border-box;  
  margin-right: -300px;
  height: 100%;
  padding: 30px;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.masala};
  z-index: 1200;
`;

const Logo = styled.img`
  width: 150px;
  margin-left: -26px;
`;

const LoginFooter = styled.div`
  flex-grow: 1;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  a {
    color: ${({ theme }) => theme.color.tumbleweed};
    text-decoration: underline;
  }
`;

const LoginFooterContent = styled.div`
  align-self: flex-end;
`;

export const LoginBackdrop = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => visible ? 'block' : 'none'};
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  z-index: 1500;
`;
