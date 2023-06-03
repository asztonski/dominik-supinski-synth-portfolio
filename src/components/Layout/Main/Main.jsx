/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";
import { theme } from "@/api/theme";
// STAGES
import Home from "@/components/Stages/Home/Home";
import About from "@/components/Stages/About/About";
import Portfolio from "@/components/Stages/Portfolio/Portfolio";
import Contact from "@/components/Stages/Contact/Contact";

const Main = () => {
  const { stage, isMobile } = useContext(AppContext);

  return (
    <StyledMain
      style={{
        transform: `${isMobile ? `none` : `translateX(${(stage - 1) * -25}%)`}`,
        zIndex: `${stage === 3 ? "3" : "1"}`,
      }}
    >
      <Home />
      <About />
      <Portfolio />
      <Contact />
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
  /* overflow: hidden; */
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
      font-size: clamp(3rem, 6vw, 9rem);
    }
    p {
      line-height: 1.6;
    }
  }
  .bottom {
    justify-content: flex-end;
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
      /* padding: 0.5rem; */
      min-height: 100vh;
      /* max-height: 800px; */
      /* padding: 1rem 0; */
    }
    div {
      width: 100%;
      max-width: 550px;
    }
    .home,
    .portfolio {
      /* height: 100vh !important; */
    }
    .home {
      .wrapper {
        height: 30%;
        max-height: 200px;
      }
    }
    .about,
    .contact {
      .wrapper {
        width: auto !important;
      }
    }
    .contact {
      padding: 0 0 4rem;
      overflow: hidden;
    }
    .bottom {
      justify-content: flex-start;
    }
  }
`;
