import styled from "@emotion/styled";
import Wrapper from "../Wrapper/Wrapper";

const Section = ({ children, withHeight, column }) => {
  return (
    <StyledSection
      style={{
        height: `${withHeight ? "100%" : "auto"}`,
      }}
    >
      <Wrapper
        style={{
          height: `${withHeight ? "50%" : "auto"}`,
          flexDirection: `${column ? "column" : "row"}`,
        }}
      >
        {children}
      </Wrapper>
    </StyledSection>
  );
};

export default Section;

const StyledSection = styled.section`
  width: 25%;
  max-width: 2400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: relative;
  .pulse-title {
    font-size: 2rem;
  }
  h2 {
    font-size: clamp(3rem, 6vw, 9rem);
  }
  p {
    line-height: 1.6;
  }
  .bottom {
    justify-content: flex-end;
  }
  .left-btn {
    &:hover {
      transform: translateX(-20%);
    }
  }
  .right-btn {
    &:hover {
      transform: translateX(20%);
    }
  }
`;
