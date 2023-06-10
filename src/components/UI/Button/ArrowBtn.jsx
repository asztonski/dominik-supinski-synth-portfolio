import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const ArrowBtn = ({ leftBtn, rightBtn, onClick }) => {
  return (
    <StyledArrowBtn
      onClick={onClick}
      className={leftBtn ? "left-btn" : "right-btn"}
    >
      {leftBtn && (
        <img
          src="images/svg/portfolio-arrow_left.png"
          alt="Left Slider Button"
        />
      )}
      {rightBtn && (
        <img
          src="images/svg/portfolio-arrow_right.png"
          alt="Right Slider Button"
        />
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
  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
    width: 30px;
    img {
      width: 100%;
    }
  }
`;
