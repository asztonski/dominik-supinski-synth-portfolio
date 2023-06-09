import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import { Button } from "@mui/material";

const CustomButton = ({ content, onClick, disabled }) => {
  return (
    <StyledButton
      sx={{
        "&.Mui-disabled": {
          // background: `${theme.colors.other}`,
          // color: `${theme.colors.other}`,
          // borderColor: `${theme.colors.other}`,
          // backdropFilter: "blur(30px)",
          opacity: 0,
        },
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </StyledButton>
  );
};

export default CustomButton;

const StyledButton = styled(Button)`
  border: 1px solid ${theme.colors.accent};
  padding: 0.85rem 0;
  width: 16rem;
  color: ${theme.colors.primary};
  background-color: black;
  transition: 1s;
  text-transform: uppercase;
  &:hover {
    box-shadow: 0 0 10px ${theme.colors.accent}, 0 0 40px ${theme.colors.accent},
      0 0 80px ${theme.colors.accent};
    background: ${theme.colors.accent};
  }
  @media (max-width: ${theme.breakpoints.md}) {
    align-self: center !important;
    width: 100%;
    max-width: 250px;
  }
`;
