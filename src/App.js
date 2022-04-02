import React, { useState, useEffect } from "react";
import dictionary from "./api/dictionary";
import DidYouKnow from "./components/DidYouKnow";
import CheckTerms from "./components/CheckTerms";
import CreateCheatsheet from "./components/CreateCheatsheet";
import Header from "./components/Header";
import Route from "./components/Route";
import Home from "./components/Home";
import ApiInfo from "./components/ApiInfo";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#898989",
    },
    secondary: {
      main: "#C5E3EC",
    },
  },
});

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
      <div className="app-container">
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
      </div>
    </ThemeProvider>
  );
};

export default App;
