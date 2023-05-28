import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const BurgerIcon = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <span />
      <span />
      <span />
    </StyledButton>
  );
};

export default BurgerIcon;

const StyledButton = styled.button`
  position: relative;
  width: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  span {
    background-color: ${theme.colors.accent};
    width: 100%;
    height: 3px;
  }
`;
