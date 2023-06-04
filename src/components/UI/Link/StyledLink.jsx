import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const CustomLink = ({ content, href }) => {
  return <StyledLink href={href}>{content}</StyledLink>;
};

export default CustomLink;

const StyledLink = styled.a`
  border: 1px solid ${theme.colors.accent};
  color: ${theme.colors.primary};
  transition: 1s;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-self: center !important;
  padding: 0.85rem 1rem;
  width: 100%;
  max-width: 250px;
  &:hover {
    box-shadow: 0 0 10px ${theme.colors.accent}, 0 0 40px ${theme.colors.accent},
      0 0 80px ${theme.colors.accent};
    background: ${theme.colors.accent};
  }
  @media (max-width: ${theme.breakpoints.md}) {
  }
`;
