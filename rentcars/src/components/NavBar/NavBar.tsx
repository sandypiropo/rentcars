import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png'; 

const NavbarContainer = styled.nav`
  background-color: #fffffff;
  position: fixed;
  color: #fff;  
  top: 0;
  left: 0;
  width: 100%;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavbarOptions = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }

  li {
  }

  a {
    text-decoration: none;
    color: #00000;
  }
`;


const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
        <NavbarContent>
                {/* Logo */}
                <Logo src={logo} alt="Logo" />
            <NavbarOptions>
             {/* Opções de navegação */}
                <ul>
                <li><a href="#">Opção 1</a></li>
                <li><a href="#">Opção 2</a></li>
                <li><a href="#">Opção 3</a></li>
                </ul>
            </NavbarOptions>
        </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;