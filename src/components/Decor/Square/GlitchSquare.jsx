/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import { theme } from "@/api/theme";

const GlitchSquare = ({ order, translateX, translateY, delay }) => {
  const squareAnim = keyframes`
    0%, 90% {
      transform: rotate(-24deg) skewX(41.5deg) scaleY(cos(45deg)) translateX(0) translateY(0);
    }
    90%, 91% {
      transform: rotate(-24deg) skewX(41.5deg) scaleY(cos(45deg)) translateX(${
        translateX + "%"
      }) translateY(${translateY + "%"});
    }
    91%, 92% {
        transform: rotate(-24deg) skewX(41.5deg) scaleY(cos(45deg)) translateX(0) translateY(0);
    }
    92%, 100% {
        transform: rotate(-24deg) skewX(41.5deg) scaleY(cos(45deg)) translateX(${
          -translateX + "%"
        }) translateY(${-translateY + "%"});
    }
  `;

  return (
    <StyledGlitchSquare
      css={css`
        animation: ${squareAnim} 10s step-end infinite;
        animation-delay: ${delay + "s"};
      `}
      className={`glitched-square square-${order}`}
    />
  );
};

export default GlitchSquare;

const StyledGlitchSquare = styled.div`
  border: 1px solid ${theme.colors.accent};
  width: 88px !important;
  height: 88px;
  position: absolute;
  margin: auto;
  transform: rotate(-24deg) skewX(41.5deg) scaleY(cos(45deg));
  pointer-events: none;
  z-index: -1;
  /* &:hover {
    background-color: ${theme.colors.accent};
  } */
`;
