import styled from "styled-components";
import Logo from "../images/logo_advanced.webp";
import Hero from "../images/hero.webp";
import Startpage from "../images/startpage.webp";
import Tobias from "../images/tobias.webp";
import { Spacer } from "./Spacer";

export const Main = () => {
  return (
    <MainContainer>
      <ImageWrapper>
        <img
          src={Hero}
          alt="hero"
          height="100%"
          width="100%"
          object-fit="fill"
        />

        <ImageContent>
          <img src={Logo} alt="logo" />
          <Spacer spacing={4} />
          <h2>Certifierad kontrollansvarig enligt Plan och Bygglagen</h2>
          <Spacer spacing={6} />
          <Button>Kontakt</Button>
        </ImageContent>
      </ImageWrapper>

      <Spacer spacing={22} />
      <InfoWrapper id="info">
        <div>
          <img src={Startpage} alt="logo" width={628} height={456} />
        </div>
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
        </AboutSection>
      </InfoWrapper>
      <Spacer spacing={22} />
      <div
        style={{
          backgroundColor: "#f9f9f9",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ContactWrapper id="contact">
          <div>
            <img src={Tobias} alt="logo" />
          </div>
          <Spacer spacing={15} orientation="horizontal" />
          <div>
            <h1>Kontakta mig</h1>
            <Spacer spacing={4} />
            <p>
              Uppdragsområden är Uddevalla med omnejd, såsom Trollhättan,
              Vänersborg, Stenungsund, Kungälv, Göteborg, Ale, Lilla Edet,
              Lysekil, Tjörn, Orust & Munkedal.
            </p>
            <Spacer spacing={4} />
            <p>Tobias Axelsson, cert XX</p>
            <Spacer spacing={1} />
            <p>Telefon: 0760-21 14 26</p>
            <Spacer spacing={1} />
            <p>
              E-post:{" "}
              <a
                href={`mailto:tobias@kaprojektkonsult.se`}
                className="custom-cursor"
              >
                tobias@kaprojektkonsult.com
              </a>
            </p>
          </div>
        </ContactWrapper>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
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
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
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

const ContactWrapper = styled.div`
  display: flex;
  padding: 124px 0;
  max-width: 770px;
`;
