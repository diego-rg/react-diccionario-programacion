import { responsiveFontSizes, createTheme } from "@mui/material/styles";

let mainTheme = createTheme({
  palette: {
    primary: {
      main: "#e70a3e",
    },
    secondary: {
      main: "#1f264e",
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
            fontSize: "1rem",
          },
        },
        {
          props: {
            variant: "subtitle1",
          },
          style: {
            fontFamily: "Josefin Sans",
            fontSize: "1.4rem",
          },
        },
        {
          props: {
            variant: "h5",
          },
          style: {
            fontFamily: "Lato",
          },
        },
        {
          props: {
            variant: "h6",
          },
          style: {
            fontFamily: "Josefin Sans",
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
