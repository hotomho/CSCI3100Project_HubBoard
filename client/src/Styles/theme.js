import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
/* Apple San Francisco Pro font */
import SFProDisplayRegular from "./fonts/SF-Pro-Display-Regular.woff2";

const theme = createTheme({
  typography: {
    fontFamily: [
      "sf_pro_display_regular",
      "sf_pro_display_medium",
      "Roboto",
    ].join(","),
  },
  palette: {
    hOrange: {
      main: orange[500],
      contrastText: "#fff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'sf_pro_display_regular';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${SFProDisplayRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },
      `,
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: orange[500],
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: orange[400],
            },
            "&.Mui-focused fieldset": {
              borderColor: orange[500],
            },
          },
        },
      },
    },
  },
});

export default theme;