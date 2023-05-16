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
  display: flex;
  justify-content: space-between;
  position: absolute;
  span {
    width: 4px;
    height: 100%;
    background: ${theme.colors.extra};
    border-radius: 5px;
    &:first-of-type {
      transform: rotate(45deg) translateX(75%);
    }
    &:last-of-type {
      transform: rotate(-45deg) translateX(-75%);
    }
  }
`;
