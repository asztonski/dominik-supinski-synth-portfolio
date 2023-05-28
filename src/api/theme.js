import { createTheme } from "@mui/material";

export const theme = {
  colors: {
    primary: "#dddddd",
    accent: "#0706b7",
    hover: "#098ce8",
    squares: "#252525",
    extra: "#e8092e",
    other: "#0f051f",
    transparent: "rgba(0,0,0,0)",
  },
  transitionTime: 0.84,
  breakpoints: {
    xl: "1536px",
    lg: "1200px",
    md: "900px",
    sm: "600px",
    xs: "400px",
  },
};

export const customTheme = createTheme({
  palette: {
    action: {},
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 100px black inset`,
              WebkitTextFillColor: `${theme.colors.primary}`,
            },
            "&.Mui-focused fieldset": {
              borderColor: `${theme.colors.accent}`,
              WebkitBoxShadow: `0 0 0 100px ${theme.colors.accent} inset`,
            },
          },
        },
      },
    },
  },
});
