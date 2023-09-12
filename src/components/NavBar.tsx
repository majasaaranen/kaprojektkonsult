import styled from "styled-components";
import Logo from "../images/logo_advanced.webp";
import LogoBlack from "../images/logo_black.webp";
import { Spacer } from "./Spacer";
import { useEffect, useState } from "react";

export const BREAKPOINT = 950;

export const Navbar = () => {
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setBgColor("black");
      } else {
        setBgColor("white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav>
      {bgColor === "white" ? (
        <img src={Logo} alt="logo" height={40} width={114} />
      ) : (
        <img src={LogoBlack} alt="logo" height={40} width={114} />
      )}
      <NavItems>
        <StyledA href="./#info" color={bgColor}>
          <p>Kontrollansvarig</p>
        </StyledA>
        <Spacer spacing={5} orientation="horizontal" />
        <StyledA href="./#contact" color={bgColor}>
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
  align-items: center;
  padding: 24px 48px;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 24px;
  }
`;

const NavItems = styled.div`
  display: flex;
`;

const StyledA = styled.a<{ color: string }>`
  text-decoration: none;
  color: ${(props) => props.color};
`;
