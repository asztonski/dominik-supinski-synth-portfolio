import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import { useContext } from "react";
import { AppContext } from "@/api/AppContext";
import NavBar from "@/components/UI/NavBar/NavBar";

const Container = ({ children }) => {
  const { isMobile } = useContext(AppContext);

  return (
    <StyledContainer>
      {children}
      {isMobile && <NavBar style={{ position: "fixed" }} />}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div`
  position: relative;
  padding: 3rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0;
  }
`;
