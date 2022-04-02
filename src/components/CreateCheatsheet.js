import React, { useState } from "react";
import CheatsheetGenerator from "./CheatsheetGenerator";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container } from "@mui/material";

//Componente que hace una request a la Api del diccionario para obtener terms los términos y ver su definición al hacer click en ellos
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
      <Button variant="outlined" onClick={() => saveTerm(term)} key={term._id}>
        {term.name}
      </Button>
    );
  });

  //Botones de cada categoría que filtran los términos
  const renderedCategories = categories.map((category) => {
    return (
      <Button
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
          variant="outlined"
          onClick={() => saveTerm(term)}
          key={term._id}
        >
          {term.name}
        </Button>
      );
    });

  return (
    <main>
      <Container
        maxWidth="lg"
        sx={{
          m: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={() => setSelectedCategory(null)}
          key="terms"
        >
          Todos
        </Button>
        {renderedCategories}
      </Container>
      <Container
        sx={{
          m: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {selectedCategory ? termsByCategory : renderedTerms}
        <Container>
          {!savedTerms.length
            ? "Haz click en un término para añadirlo a tus apuntes."
            : renderedSavedTerms}
        </Container>
      </Container>
      <CheatsheetGenerator savedTerms={savedTerms} />
    </main>
  );
};

export default CreateCheatsheet;
