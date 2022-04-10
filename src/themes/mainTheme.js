import { responsiveFontSizes, createTheme } from "@mui/material/styles";

let mainTheme = createTheme({
  palette: {
    primary: {
      main: "#676767",
    },
    secondary: {
      main: "#2d2c3f",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body1",
          },
          style: {
            fontFamily: "Josefin Sans",
            fontSize: "1.1rem",
          },
        },
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: "1.2rem",
          },
        },
        {
          props: {
            variant: "subtitle2",
          },
          style: {
            fontFamily: "Josefin Sans",
          },
        },
        {
          props: {
            variant: "h4",
          },
          style: {
            fontFamily: "Dancing Script",
          },
        },
        {
          props: {
            variant: "h6",
          },
          style: {
            fontFamily: "Dancing Script",
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: "Josefin Sans",
          fontSize: "1.1rem",
        },
      },
    },
  },
});

mainTheme = responsiveFontSizes(mainTheme);

export default mainTheme;
