import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const Separator = ({ margin, id }) => {
  return (
    <StyledSeparator
      id={id}
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
