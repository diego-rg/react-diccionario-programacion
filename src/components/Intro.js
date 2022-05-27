import React from "react";

import { Box, Typography, Grid, Button } from "@mui/material";

const Intro = () => {
  return (
    <Grid
      component="section"
      container
      alignItems="center"
      justifyContent="center"
      maxWidth="md"
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          padding: 4,
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            textAlign: { xs: "center", sm: "center", md: "start" },
          }}
        >
          <Typography
            variant="body1"
            component="p"
            sx={{
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            Consulta el diccionario de programación, crea tus propios apuntes en
            formato doc o consume nuestra API REST en tus proyectos.
          </Typography>
          <Button
            sx={{
              marginY: 2,
              fontSize: {
                xs: "0.8rem",
                sm: "1.05rem",
              },
            }}
            variant="contained"
            color="primary"
            href="#info"
          >
            Comenzar
          </Button>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          padding: 4,
          display: "flex",
          justifyContent: "center",
          order: { xs: -1, sm: -1, md: 1 },
        }}
      >
        <Box
          component="img"
          src="/book.svg"
          width="100%"
          maxWidth="400px"
          alt="Imagen de una mujer con un libro"
        ></Box>
      </Grid>
    </Grid>
  );
};

export default Intro;
