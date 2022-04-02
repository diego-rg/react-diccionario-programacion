import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

//Componente que hace una request a la Api del diccionario para obtener todos los términos y ver su definición al hacer click en ellos
//Recibimos terms, categories como props
const SabiasQue = ({ terms, categories }) => {
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Botones de cada término que escriben la definición en el textarea
  const renderedTerms = terms.map((term) => {
    return (
      <Button
        variant="outlined"
        onClick={() => setSelectedTerm(term)}
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
          onClick={() => setSelectedTerm(term)}
          key={term._id}
        >
          {term.name}
        </Button>
      );
    });

  return (
    <Container maxWidth="lg">
      <Container
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
          key="todos"
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
      </Container>
      <TextField
        multiline
        fullWidth
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        name="definitions"
        id="definitions"
        value={
          selectedTerm
            ? `${selectedTerm.name}: ${selectedTerm.definition}`
            : "Haz click en un término para ver su definición."
        }
        onChange={(e) => setSelectedTerm(e.target.value)}
      ></TextField>
    </Container>
  );
};

export default SabiasQue;
