import dictionary from "./api/dictionary"; //Axios modificado

import React, { useState, useEffect } from "react";
import DidYouKnow from "./components/DidYouKnow";
import CheckTerms from "./components/CheckTerms";
import CreateCheatsheet from "./components/CreateCheatsheet";
import Header from "./components/Header";
import Route from "./components/Route";
import Home from "./components/Home";
import ApiInfo from "./components/ApiInfo";
import Loading from "./components/Loading";

import "@fontsource/dancing-script";
import "@fontsource/josefin-sans";

import mainTheme from "./themes/mainTheme"; //Archivo para los themes de mui

import { ThemeProvider } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";

//Hacemos las requests a la API y las pasamos a los componentes
const App = () => {
  const [loading, setLoading] = useState(true); //Controlamos que está aún con la petición para mostrar un componente de "Cargando"
  const [random, setRandom] = useState([]);
  const [terms, setTerms] = useState([]);
  const [categories, setCategories] = useState([]);

  //Petición a la API: random term
  useEffect(() => {
    const random = async () => {
      setLoading(true);
      try {
        const { data } = await dictionary.get("/terms/random");
        setRandom(data.random);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    random();
  }, []);

  //Petición a la API: all terms
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

  //Petición a la API: all categories
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

  return loading ? (
    <Loading />
  ) : (
    <ThemeProvider theme={mainTheme}>
      <Paper
        elevation={24}
        sx={{
          backgroundColor: "#ffffff",
          minHeight: "75vh",
          width: "75vw",
          borderRadius: "50px",
        }}
      >
        <Header />
        <Route path="/">
          <Home />
          <DidYouKnow random={random} />
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
      </Paper>
    </ThemeProvider>
  );
};

export default App;
