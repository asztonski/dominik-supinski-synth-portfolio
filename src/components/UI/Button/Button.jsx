import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const Button = ({ content, onClick }) => {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: 1px solid ${theme.colors.accent};
  padding: 0.85rem 5rem;
  color: ${theme.colors.primary};
  width: max-content;
  transition: 1s;
  &:hover {
    box-shadow: 0 0 10px ${theme.colors.accent}, 0 0 40px ${theme.colors.accent}, 0 0 80px ${theme.colors.accent};
    background: ${theme.colors.accent};
  }
`;
