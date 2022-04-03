import React, { useState } from "react";
import CheatsheetGenerator from "./CheatsheetGenerator";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Container } from "@mui/material";

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
      <Button
        sx={{
          m: 0.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        variant="outlined"
        color="error"
        endIcon={<DeleteIcon />}
        onClick={() => deleteTerm(term)}
        key={term._id}
      >
        {term.name}
      </Button>
    );
  });

  //Botones de cada término que añaden el término en los apuntes
  const renderedTerms = terms.map((term) => {
    return (
      <Button
        sx={{
          m: 0.5,
        }}
        variant="outlined"
        onClick={() => saveTerm(term)}
        key={term._id}
      >
        {term.name}
      </Button>
    );
  });

  //Botones de cada categoría que filtran los términos
  const renderedCategories = categories.map((category) => {
    return (
      <Button
        sx={{
          m: 0.5,
        }}
        variant="contained"
        onClick={() => setSelectedCategory(category)}
        key={category}
      >
        {category}
      </Button>
    );
  });

  //Función filtrar por categorías
  const termsByCategory = terms
    .filter((term) => term.category === selectedCategory)
    .map((term) => {
      return (
        <Button
          sx={{
            m: 0.5,
          }}
          variant="outlined"
          onClick={() => saveTerm(term)}
          key={term._id}
        >
          {term.name}
        </Button>
      );
    });

  return (
    <Container
      component="main"
      sx={{
        marginTop: 5,
        background: "rgba(239, 239, 239, 0.9)",
      }}
    >
      <Box
        sx={{
          m: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            m: 0.5,
          }}
          variant="contained"
          onClick={() => setSelectedCategory(null)}
          key="terms"
        >
          Todos
        </Button>
        {renderedCategories}
      </Box>
      <Box
        sx={{
          m: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {selectedCategory ? termsByCategory : renderedTerms}
      </Box>
      <Box
        sx={{
          m: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!savedTerms.length
          ? "Haz click en un término para añadirlo a tus apuntes."
          : renderedSavedTerms}
      </Box>

      <CheatsheetGenerator savedTerms={savedTerms} />
    </Container>
  );
};

export default CreateCheatsheet;
