import styled from "styled-components";
import Logo from "../images/logo.png";
import Hero from "../images/hero.png";
import Startpage from "../images/startpage.png";
import Tobias from "../images/tobias.png";
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
          object-fit="cover"
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

      <InfoWrapper>
        <img src={Startpage} alt="logo" width={628} height={456} />
        <div>
          <h1>Certifierad kontrollansvarig</h1>
          <p>
            Som kontrollansvarig, KA i bygg- och anläggningsprojekt hjälper jag
            dig som Byggherre följa bygglagstiftningen, Plan och Bygglagen. Jag
            upprättar förslag till kontrollplan för den aktuella åtgärden,
            medverkar på tekniskt samråd och arbetsplatsbesök med
            byggnadsinspektör. Deltager vid besiktningar samt skriver utlåtande
            som är tillgrund för byggnadsnämndens beslut om slutbesked. Jag
            hjälper även till med rådgivning vid bygglovsansökan.
          </p>
          <p>
            Läs mer på{" "}
            <a href="https://www.boverket.se/kontrollansvarig">
              boverket.se/kontrollansvarig
            </a>
          </p>
        </div>
      </InfoWrapper>

      <Spacer spacing={22} />

      <ContactWrapper>
        <img src={Tobias} alt="logo" />
        <Spacer spacing={15} orientation="horizontal" />
        <div>
          <h1>Kontakta mig</h1>
          <Spacer spacing={4} />
          <p>
            Uppdragsområden är Uddevalla med omnejd, såsom Trollhättan,
            Vänersborg, Stenungsund, Kungälv, Göteborg & Ale, Lilla Edet,
            Lysekil, Tjörn, Orust & Munkedal.
          </p>
          <Spacer spacing={4} />
          <p>Tobias Axelsson, cert XX</p>
          <p>Telefon: 0702-XX XX XX</p>
          <p>
            E-post:{" "}
            <a
              href={`mailto:tobias@kaprojektkonsult.se`}
              className="custom-cursor"
            >
              tobias@kaprojektkonsult.se
            </a>
          </p>
        </div>
      </ContactWrapper>
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
  width: 100vw;
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
  justify-content: center;
  max-width: 1000px;
`;
const ContactWrapper = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  padding: 124px 0;
`;
