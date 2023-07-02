import styled from "styled-components";
import { Spacer } from "./Spacer";
import { ContactSection } from "./ContactSection";
import { InformationSection } from "./InformationSection";
import { Hero } from "./Hero";

export const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <Spacer spacing={22} />
      <InformationSection />
      <Spacer spacing={22} />
      <ContactSection />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
