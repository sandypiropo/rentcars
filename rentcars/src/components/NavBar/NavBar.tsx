import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const NavbarContainer = styled.nav`
  @import url('../globalStyles.css');
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavbarOptions = styled.div`
  @import url('../globalStyles.css');
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer className="navbar-container">
      <NavbarContent>
        {/* Logo */}
        <Logo src={logo} alt="Logo" />
        <NavbarOptions className="navbar-options">
          {/* Opções de navegação */}
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li>
              <a href='#'>MODELS</a>
              {/* Dropdown */}
              <div className="dropdown">
                <ul>
                  <li>Modelo 1</li>
                  <li>Modelo 2</li>
                  <li>Modelo 3</li>
                </ul>
              </div>
            </li>
          </ul>
        </NavbarOptions>
      </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;