import React, { useState } from "react";

import { Grid, Box, Typography, Button, TextField } from "@mui/material";

//Componente que recibe los datos solicitados a la API para mostrar todos los términos y ver su definición al hacer click en ellos
const CheckTerms = ({ terms, categories }) => {
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Botones de cada término que escriben la definición en el textarea
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
          onClick={() => setSelectedTerm(term)}
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
            onClick={() => setSelectedTerm(term)}
          >
            {term.name}
          </Button>
        </Grid>
      );
    });

  return (
    <Box
      maxWidth="lg"
      component="main"
      sx={{
        padding: 2,
        marginTop: { xs: 2, sm: 2 },
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{
          paddingBottom: { xs: 4, sm: 6 },
          textAlign: "justify",
        }}
      >
        Busca los términos haciendo click en su categoría y luego haz click en
        el término para ver su definición.
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
      <TextField
        multiline
        fullWidth
        sx={{
          marginTop: 6,
        }}
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
    </Box>
  );
};

export default CheckTerms;
