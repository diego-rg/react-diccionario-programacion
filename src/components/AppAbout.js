import React from "react";

import { Box, Typography, Grid } from "@mui/material";

const AppAbout = () => {
  return (
    <Box
      sx={{
        background: "#f2f2f2",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
              Consulta el diccionario de programación, crea tus propios apuntes
              en formato doc o consume nuestra API REST en tus proyectos.
            </Typography>
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
    </Box>
  );
};

export default AppAbout;
