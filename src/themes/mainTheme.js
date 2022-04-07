import { responsiveFontSizes, createTheme } from "@mui/material/styles";

let mainTheme = createTheme({
  palette: {
    primary: {
      main: "#5e51f8",
    },
    secondary: {
      main: "#ffab00",
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
        },
      },
    },
  },
});

mainTheme = responsiveFontSizes(mainTheme);

export default mainTheme;