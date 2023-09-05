import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const Separator = ({ margin, id, className }) => {
  return (
    <StyledSeparator
      id={id}
      className={className}
      style={{
        marginBottom: `${margin}rem`,
      }}
    />
  );
};

export default Separator;

const StyledSeparator = styled.div`
  width: 100%;
  height: 1rem;
  display: none;
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;
