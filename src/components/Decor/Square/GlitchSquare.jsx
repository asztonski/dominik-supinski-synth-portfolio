import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import { theme } from "@/api/theme";

const GlitchSquare = ({ order }) => {
  return <StyledGlitchSquare className={`glitched-square square-${order}`} />;
};

export default GlitchSquare;

const StyledGlitchSquare = styled.div`
  border: 1px solid ${theme.colors.accent};
  width: 88px;
  height: 88px;
  position: absolute;
  margin: auto;
  transform: rotate(-24deg) skewX(41.5deg) scaleY(cos(45deg));
  /* &:hover {
    background-color: ${theme.colors.accent};
  } */
`;
