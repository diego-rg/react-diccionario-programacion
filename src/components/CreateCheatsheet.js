import React, { useState } from "react";
import CheatsheetGenerator from "./CheatsheetGenerator";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";

//Recibimos terms, categories como props
const CreateCheatsheet = ({ terms, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [savedTerms, setSavedTerm] = useState([]);

  //función para guardar un término
  const saveTerm = (term) => {
    if (!savedTerms.includes(term)) {
      setSavedTerm([...savedTerms, term]);
    }
  };

  //función para guardar un término
  const deleteTerm = (term) => {
    let index = savedTerms.indexOf(term); //calculamos o índice dos terms poder selecionalo e eliminalo
    savedTerms.splice(index, 1); //eliminamos o seleccionado polo seu indice
    setSavedTerm([...savedTerms]); //gardamos o novo array si o eliminado
  };

  //Botones de cada término añadido para poder eliminarlo
  const renderedSavedTerms = savedTerms.map((term) => {
    return (
      <Grid item key={term._id}>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          size="small"
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
        <Button size="small" variant="outlined" onClick={() => saveTerm(term)}>
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
          size="small"
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
            size="small"
            variant="outlined"
            onClick={() => saveTerm(term)}
          >
            {term.name}
          </Button>
        </Grid>
      );
    });

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        marginTop: 5,
      }}
    >
      <Grid
        container
        spacing={0.5}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item key="todos">
          <Button
            size="small"
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
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: 2,
        }}
      >
        {selectedCategory ? termsByCategory : renderedTerms}
      </Grid>
      <Typography
        variant="body1"
        component="p"
        sx={{
          marginTop: 2,
          textAlign: "center",
        }}
      >
        Haz click en un término para añadirlo a tus apuntes.
      </Typography>
      <Grid
        container
        spacing={0.5}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: 2,
        }}
      >
        {renderedSavedTerms}
      </Grid>
      <CheatsheetGenerator savedTerms={savedTerms} />
    </Container>
  );
};

export default CreateCheatsheet;
