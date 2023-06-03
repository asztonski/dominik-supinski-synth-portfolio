import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const Wrapper = ({ children, isMobile, withHeight, column }) => {
  return (
    <StyledWrapper
      style={{
        height: `${!isMobile ? `${withHeight ? "50%" : "auto"}` : ""} `,
        flexDirection: `${column && !isMobile ? "column" : "row"}`,
      }}
      className="wrapper"
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;

const StyledWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;
