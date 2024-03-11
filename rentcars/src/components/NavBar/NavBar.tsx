import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const NavbarContainer = styled.nav`
  background-color: #ffffffffff;
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
  padding: 0.1rem;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavbarOptions = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    gap: 4rem;
    margin-right: 4rem;
  }

  li {
    position: relative;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 24px;
    font-family: 'Bahnschrift Condensed', sans-serif;
  }

  /* Dropdown */
  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
  }

  li:hover .dropdown {
    display: block;
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
