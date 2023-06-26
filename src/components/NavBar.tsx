import styled from "styled-components";
import Logo from "../images/logo.png";
import { Spacer } from "./Spacer";

export const Navbar = () => {
  return (
    <Nav>
      <Image src={Logo} alt="logo" />
      <NavItems>
        <p>Kontrollansvarig</p>
        <Spacer spacing={5} orientation="horizontal" />
        <p>Kontakt</p>
      </NavItems>
    </Nav>
  );
};

const Nav = styled.nav`
  position: absolute;
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
  color: #fff;
`;
