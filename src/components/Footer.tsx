import styled from "styled-components";
import Logo from "../images/logo_black.webp";
import { Spacer } from "./Spacer";

export const Footer = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <Spacer spacing={3} />
      <p>©KA projektkonsult 2023</p>
    </Container>
  );
};

const Container = styled.div`
  padding: 80px 128px;

  @media screen and (max-width: 750px) {
    padding: 60px 24px;
  }
`;
