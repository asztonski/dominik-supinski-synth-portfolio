/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";
import { theme } from "@/api/theme";
// STAGES
import Home from "@/components/Stages/Home/Home";
import About from "@/components/Stages/About/About";
import Portfolio from "@/components/Stages/Portfolio/Portfolio";

const Main = () => {
  const { stage } = useContext(AppContext);

  return (
    <StyledMain style={{ transform: `translateX(${(stage - 1) * -25}%)` }}>
      <Home withHeight />
      <About />
      <Portfolio />
      <About />
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
`;
