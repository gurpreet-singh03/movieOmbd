import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--text-clr);
   padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
  font-family;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin-left: 20px;
  padding: 10px 15px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #444;
    border-radius: 5px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer className="conatiner">
      <Logo>MovieSeek</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
       
        <NavLink to="/">Login</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
