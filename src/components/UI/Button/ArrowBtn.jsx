import styled from "@emotion/styled";

const ArrowBtn = ({ leftBtn, rightBtn, onClick }) => {
  return (
    <StyledArrowBtn
      onClick={onClick}
      className={leftBtn ? "left-btn" : "right-btn"}
    >
      {leftBtn && (
        <svg width="85.5px" height="47.5px">
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
        <svg width="85.5px" height="47.5px">
          <path
            fillRule="evenodd"
            stroke="rgb(7, 6, 183)"
            strokeWidth="1px"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M83.746,23.249 L12.734,45.274 L1.722,23.249 L12.734,1.225 L83.746,23.249 Z"
          />
          <path
            fillRule="evenodd"
            stroke="rgb(7, 6, 183)"
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
`;
