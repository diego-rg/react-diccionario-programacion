import React, { useState } from "react";
import CheatsheetGenerator from "./CheatsheetGenerator";

import { Box, Grid, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

//Componente que recibe los datos solicitados a la API para mostrar todos los términos y añadirlos a los apuntes al hacer click en ellos
const CreateCheatsheet = ({ terms, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [savedTerms, setSavedTerm] = useState([]);

  //Función para guardar un término
  const saveTerm = (term) => {
    if (!savedTerms.includes(term)) {
      setSavedTerm([...savedTerms, term]);
    }
  };

  //Función para borrar un término
  const deleteTerm = (term) => {
    let index = savedTerms.indexOf(term); //Buscamos el índice del term poder selecionarlo
    savedTerms.splice(index, 1); //Lo eliminamos usando su índice
    setSavedTerm([...savedTerms]); //Guardamos el nuevo array sin el eliminado
  };

  //Botones de cada término añadido para poder eliminarlo
  const renderedSavedTerms = savedTerms.map((term) => {
    return (
      <Grid item key={term._id}>
        <Button
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="outlined"
          color="error"
          endIcon={<DeleteIcon />}
          onClick={() => deleteTerm(term)}
        >
          {term.name}
        </Button>
      </Grid>
    );
  });

  //Botones de cada término que añaden el término en los apuntes
  const renderedTerms = terms.map((term) => {
    return (
      <Grid item key={term._id}>
        <Button
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
            },
          }}
          variant="outlined"
          onClick={() => saveTerm(term)}
        >
          {term.name}
        </Button>
      </Grid>
    );
  });

  //Botones de cada categoría que filtran los términos
  const renderedCategories = categories.map((category) => {
    return (
      <Grid item key={category}>
        <Button
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
            },
          }}
          variant="contained"
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </Button>
      </Grid>
    );
  });

  //Función filtrar por categorías
  const termsByCategory = terms
    .filter((term) => term.category === selectedCategory)
    .map((term) => {
      return (
        <Grid item key={term._id}>
          <Button
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
              },
            }}
            variant="outlined"
            onClick={() => saveTerm(term)}
          >
            {term.name}
          </Button>
        </Grid>
      );
    });

  return (
    <Box component="main">
      <Typography
        variant="body1"
        component="p"
        sx={{
          paddingBottom: { xs: 4, sm: 6 },
          textAlign: "justify",
        }}
      >
        Haz click en un término para agregarlo a tus apuntes. Puedes
        descargarlos en formato doc cuando finalices.
      </Typography>
      <Grid
        container
        spacing={0.5}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item key="todos">
          <Button
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
              },
            }}
            variant="contained"
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </Button>
        </Grid>
        {renderedCategories}
      </Grid>
      <Grid
        container
        spacing={0.5}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          marginTop: 4,
        }}
      >
        {selectedCategory ? termsByCategory : renderedTerms}
      </Grid>
      <Typography
        variant="body1"
        component="p"
        sx={{
          marginTop: 6,
          textAlign: "justify",
        }}
      >
        Aquí podrás ver los términos que has seleccionado. Haz click en ellos
        para eliminarlos.
      </Typography>
      <Grid
        container
        spacing={0.5}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          marginTop: 4,
        }}
      >
        {renderedSavedTerms}
      </Grid>
      <CheatsheetGenerator savedTerms={savedTerms} />
    </Box>
  );
};

export default CreateCheatsheet;
