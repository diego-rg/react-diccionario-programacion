import React from "react";

import { Box, Typography, Grid, Button } from "@mui/material";

const Intro = () => {
  return (
    <Grid
      component="section"
      container
      alignItems="center"
      justifyContent="center"
      maxWidth="lg"
      sx={{ minHeight: "87vh", padding: { xs: 2, sm: 3 } }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "center", md: "start" },
        }}
      >
        <Box
          sx={{
            paddingY: 4,
            maxWidth: "500px",
            textAlign: { xs: "center", sm: "center", md: "start" },
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: { xs: "center", sm: "center", md: "start" },
              paddingY: 2,
              display: { xs: "none", sm: "inherit" },
            }}
          >
            Diccionario programación.
          </Typography>
          <Typography
            variant="subtitle1"
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
                xs: "0.9rem",
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
          display: "flex",
          justifyContent: { xs: "center", sm: "center", md: "end" },
          order: { xs: -1, sm: -1, md: 1 },
        }}
      >
        <Box
          component="img"
          src="/book.svg"
          width="100%"
          maxWidth="500px"
          alt="Imagen de una mujer con un libro"
        ></Box>
      </Grid>
    </Grid>
  );
};

export default Intro;
