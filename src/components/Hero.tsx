import Logo from "../images/logo_advanced.webp";
import HeroImg from "../images/hero.webp";
import styled from "styled-components";
import { Spacer } from "./Spacer";

export const Hero = () => {
  return (
    <ImageWrapper>
      <img
        src={HeroImg}
        alt="hero"
        height="100%"
        width="100%"
        object-fit="fill"
      />

      <ImageContent>
        <LogoWrapper>
          <img src={Logo} alt="logo" width="100%" />
        </LogoWrapper>
        <Spacer spacing={4} />
        <h2>Certifierad Kontrollansvarig enligt Plan och Bygglagen</h2>
        <Spacer spacing={6} />
        <Button>
          <StyledA href="./#contact">
            <p>Kontakt</p>
          </StyledA>
        </Button>
      </ImageContent>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const LogoWrapper = styled.div`
  width: 300px;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: black;
`;

const ImageContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const Button = styled.button`
  background-color: #fff;
  width: 280px;
  border-radius: 100px;
  height: 56px;
  border: none;
  cursor: pointer;
  font-family: "Inter", sans-serif;
`;
