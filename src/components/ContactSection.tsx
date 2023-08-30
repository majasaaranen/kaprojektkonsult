import styled from "styled-components";
import { Spacer } from "./Spacer";
import Tobias from "../images/tobias.webp";

export const BREAKPOINT = 950;

export const ContactSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ContactWrapper id="contact">
        <img src={Tobias} alt="logo" width="182px" height="240px" />

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
          <p>Tobias Axelsson, cert: C003887</p>
          <Spacer spacing={1} />
          <p>
            Telefon: <StyledA href="tel:0760211426">0760-21 14 26</StyledA>
          </p>
          <Spacer spacing={1} />
          <p>
            E-post:{" "}
            <StyledA
              href={`mailto:tobias@kaprojektkonsult.se`}
              className="custom-cursor"
            >
              tobias@kaprojektkonsult.com
            </StyledA>
          </p>
          <Spacer spacing={4} />
        </div>
      </ContactWrapper>
    </div>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  padding: 124px 0;
  max-width: 770px;

  @media screen and (max-width: ${BREAKPOINT}px) {
    flex-direction: column-reverse;
    padding: 40px 24px;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: black;
`;
