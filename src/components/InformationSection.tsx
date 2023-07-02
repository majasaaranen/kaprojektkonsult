import styled from "styled-components";
import Startpage from "../images/startpage.webp";
import { Spacer } from "./Spacer";

export const BREAKPOINT = 950;

export const InformationSection = () => {
  return (
    <InfoWrapper id="info">
      <img src={Startpage} alt="logo" width={"100%"} height={"100%"} />
      <Spacer spacing={8} orientation="horizontal" />
      <AboutSection>
        <Line />
        <Spacer spacing={4} />
        <h1>Certifierad kontrollansvarig</h1>
        <Spacer spacing={4} />
        <p>
          Som kontrollansvarig, KA i bygg- och anläggningsprojekt hjälper jag
          dig som Byggherre följa bygglagstiftningen, Plan och Bygglagen. Jag
          upprättar förslag till kontrollplan för den aktuella åtgärden,
          medverkar på tekniskt samråd och arbetsplatsbesök med
          byggnadsinspektör. Deltager vid besiktningar samt skriver utlåtande
          som är tillgrund för byggnadsnämndens beslut om slutbesked. Jag
          hjälper även till med rådgivning vid bygglovsansökan.
        </p>
        <Spacer spacing={3} />
        <p>
          Läs mer på{" "}
          <a href="https://www.boverket.se/kontrollansvarig">
            boverket.se/kontrollansvarig
          </a>
        </p>
        <Spacer spacing={4} />
      </AboutSection>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  /* padding: 0 128px; */

  @media screen and (max-width: ${BREAKPOINT}px) {
    flex-direction: column-reverse;
    padding: 40px 24px;
  }
`;

const Line = styled.div`
  width: 40px;
  height: 2px;
  background-color: black;
`;
const AboutSection = styled.div`
  max-width: 500px;

  a {
    color: #000;
  }
`;
