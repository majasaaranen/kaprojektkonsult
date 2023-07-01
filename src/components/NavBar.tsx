import styled from "styled-components";
import Logo from "../images/logo_advanced.webp";
import { Spacer } from "./Spacer";

export const Navbar = () => {
  return (
    <Nav>
      <Image src={Logo} alt="logo" />
      <NavItems>
        <StyledA href="./#info">
          <p>Kontrollansvarig</p>
        </StyledA>
        <Spacer spacing={5} orientation="horizontal" />
        <StyledA href="./#contact">
          <p>Kontakt</p>
        </StyledA>
      </NavItems>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
`;

const Image = styled.img`
  width: 45px;
`;

const NavItems = styled.div`
  display: flex;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: white;
`;
