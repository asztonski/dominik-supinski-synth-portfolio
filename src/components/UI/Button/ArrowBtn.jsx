import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import { useContext } from "react";
import { AppContext } from "@/api/AppContext";

const ArrowBtn = ({ leftBtn, rightBtn, onClick }) => {
  const { stage } = useContext(AppContext);

  return (
    <StyledArrowBtn
      onClick={onClick}
      className={leftBtn ? "left-btn" : "right-btn"}
      tabIndex={stage !== 3 ? "-1" : leftBtn ? "9" : "10"}
    >
      {leftBtn && (
        <svg
          width="85.5px"
          height="47.5px"
          viewBox="0 0 85.5 47.5"
          alt="Slider's previous button"
        >
          <path
            fillRule="evenodd"
            stroke="rgb(7, 6, 183)"
            strokeWidth="1px"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M1.253,23.249 L72.265,45.274 L83.277,23.249 L72.265,1.225 L1.253,23.249 Z"
          />
          <path
            fillRule="evenodd"
            stroke="rgb(7, 6, 183)"
            strokeWidth="1px"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M83.749,24.249 L4.750,24.249 "
          />
        </svg>
      )}
      {rightBtn && (
        <svg
          width="85.5px"
          height="47.5px"
          viewBox="0 0 85.5 47.5"
          alt="Slider's next button"
        >
          <path
            fillRule="evenodd"
            stroke={theme.colors.accent}
            strokeWidth="1px"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M83.746,23.249 L12.734,45.274 L1.722,23.249 L12.734,1.225 L83.746,23.249 Z"
          />
          <path
            fillRule="evenodd"
            stroke={theme.colors.accent}
            strokeWidth="1px"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M1.249,24.249 L80.249,24.249 "
          />
        </svg>
      )}
    </StyledArrowBtn>
  );
};
export default ArrowBtn;

const StyledArrowBtn = styled.button`
  transition: 0.34s ease-in;
  height: max-content;
  align-self: center;
  width: 84px;
  svg {
    path {
      transition: 0.3s ease-in-out;
    }
  }
  &:hover {
    svg {
      path {
        stroke: ${theme.colors.hover};
      }
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;
