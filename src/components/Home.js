import React from "react";

import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      component="main"
      maxWidth="lg"
      sx={{
        padding: 2,
        marginTop: 2,
      }}
    >
      <Typography variant="body1" component="p">
        Consulta el diccionario de programación, crea tus propios apuntes en
        formato doc o consume nuestra API REST en tus proyectos.
      </Typography>
    </Box>
  );
};

export default Home;
