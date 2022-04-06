import React, { useState, useEffect } from "react";
import dictionary from "./api/dictionary";
import DidYouKnow from "./components/DidYouKnow";
import CheckTerms from "./components/CheckTerms";
import CreateCheatsheet from "./components/CreateCheatsheet";
import Header from "./components/Header";
import Route from "./components/Route";
import Home from "./components/Home";
import ApiInfo from "./components/ApiInfo";

import "@fontsource/dancing-script";
import "@fontsource/josefin-sans";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import IconButton from "@mui/material/IconButton";

let theme = createTheme({
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
            variant: "h5",
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

theme = responsiveFontSizes(theme);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [terms, setTerms] = useState([]);
  const [categories, setCategories] = useState([]);

  //fetch all terms
  useEffect(() => {
    const allTerms = async () => {
      setLoading(true);
      try {
        const { data } = await dictionary.get("/terms/all");
        setTerms(data.terms);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    allTerms();
  }, []);

  //fetch all categs
  useEffect(() => {
    const allCategories = async () => {
      setLoading(true);
      try {
        const { data } = await dictionary.get("/terms/categories");
        setCategories(data.categories);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    allCategories();
  }, []);

  //Pasamos os terms e as categories como props
  return loading ? (
    <IconButton color="primary" size="large">
      <HourglassEmptyIcon />
    </IconButton>
  ) : (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Header />
        <Route path="/">
          <Home />
          <DidYouKnow />
        </Route>
        <Route path="/api">
          <ApiInfo />
        </Route>
        <Route path="/dictionary">
          <CheckTerms terms={terms} categories={categories} />
        </Route>
        <Route path="/cheatsheet">
          <CreateCheatsheet terms={terms} categories={categories} />
        </Route>
      </Box>
    </ThemeProvider>
  );
};

export default App;
