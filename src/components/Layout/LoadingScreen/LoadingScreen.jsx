import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <StyledLoadingWindow>
        <span>Page is loading...</span>
        <LoadingBar />
      </StyledLoadingWindow>
    </StyledLoadingScreen>
  );
};

export default LoadingScreen;

const StyledLoadingScreen = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  inset: 0;
  margin: auto;
  /* background-color: ${theme.colors.squares}; */
  background-color: #010126;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoadingWindow = styled.div`
  width: 25%;
  padding: 3rem 1rem;
  background-color: ${theme.colors.primary};
  border-top: 2rem solid ${theme.colors.accent};
  border-left: 0.25rem solid ${theme.colors.accent};
  border-bottom: 0.25rem solid ${theme.colors.accent};
  border-right: 0.25rem solid ${theme.colors.accent};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  /* color: ${theme.colors.accent}; */
  color: black;
  span {
    letter-spacing: 5px;
  }
`;

const LoadingBar = styled.div`
  border: 0.25rem solid ${theme.colors.accent};
  border-radius: 1rem;
  width: 85%;
  margin: 1.2rem 0 0;
  padding: 1rem 1.25rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 95%;
    margin: auto;
    inset: 0;
    height: 1rem;
    background-color: ${theme.colors.extra};
    border-radius: 1rem;
    transition: 0.2s ease-in;
  }
`;
