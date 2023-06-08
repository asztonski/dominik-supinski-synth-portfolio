import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const CloseBtn = ({ onClick }) => {
  return (
    <StyledCloseBtn onClick={onClick}>
      <span />
      <span />
    </StyledCloseBtn>
  );
};

export default CloseBtn;

const StyledCloseBtn = styled.button`
  height: 30px;
  aspect-ratio: 1 / 1;
  position: absolute;
  span {
    width: 4px;
    height: 100%;
    background: ${theme.colors.primary};
    border-radius: 5px;
    position: absolute;
    inset: 0;
    margin: auto;
    pointer-events: none;
    &:first-of-type {
      transform: rotate(45deg);
    }
    &:last-of-type {
      transform: rotate(-45deg);
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    height: 25px;
    span {
      width: 3px;
    }
  }
`;
