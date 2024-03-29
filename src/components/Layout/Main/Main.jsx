/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { AppContext } from "@/api/AppContext";
import { useContext, useEffect } from "react";
import { theme } from "@/api/theme";
import { useInView } from "react-intersection-observer";
// STAGES
import Home from "@/components/Stages/Home/Home";
import About from "@/components/Stages/About/About";
import Portfolio from "@/components/Stages/Portfolio/Portfolio";
import Contact from "@/components/Stages/Contact/Contact";
// UI
import Separator from "@/components/UI/Separator/Separator";

const Main = () => {
  const { stage, setStage, isMobile } = useContext(AppContext);

  const [home, isHomeInView] = useInView({
    threshold: 0.5,
  });
  const [about, isAboutInView] = useInView({
    threshold: 0.5,
  });
  const [portfolio, isPortfolioInView] = useInView({
    threshold: 1,
  });
  const [contact, isContactInView] = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (isMobile) {
      if (isHomeInView) {
        setStage(1);
      }
      if (isAboutInView) {
        setStage(2);
      }
      if (isPortfolioInView) {
        setStage(3);
      }
      if (isContactInView) {
        setStage(4);
      }
    }
  });

  return (
    <StyledMain
      style={{
        transform: `${isMobile ? `none` : `translateX(${(stage - 1) * -25}%)`}`,
        zIndex: `${stage === 3 || stage === 2 ? "3" : "1"}`,
      }}
    >
      <Separator className="absolute" margin={0} id="home" />
      <Home observer={home} />
      <Separator margin={3} id="about" />
      <About observer={about} />
      <Separator margin={2} id="portfolio" />
      <Portfolio observer={portfolio} />
      <Separator margin={3} id="contact" />
      <Contact observer={contact} />
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main`
  flex: 1 0 auto;
  display: flex;
  width: 400vw;
  transition: transform ${`${theme.transitionTime}s`} ease-in;
  height: 75vh;
  section {
    display: flex;
    width: 25%;
    width: 25%;
    max-width: 2400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    position: relative;
    h2 {
      font-size: clamp(2.5rem, 15vmin, 10rem);
    }
    p {
      line-height: 1.6;
    }
  }
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 0 1rem;
    overflow: auto;
    section {
      width: 100%;
      height: auto;
      min-height: 100vh;
      h2 {
        font-size: 2.5rem;
      }
    }
    div {
      width: 100%;
      max-width: 550px;
    }
    .contact {
      overflow: hidden;
    }
  }
`;
