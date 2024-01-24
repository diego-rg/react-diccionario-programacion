import React from "react";

import { Box, Typography, Stack, CircularProgress } from "@mui/material";

//Loader para mostar mientras se espera la respuesta de la API en Heroku.
const Loading = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
      }}
    >
      <Box sx={{ padding: 4, display: "flex" }}>
        <Stack sx={{ color: "white" }} spacing={2} direction="row">
          <CircularProgress color="inherit" />
        </Stack>
      </Box>
      <Typography
        variant="h5"
        component="p"
        sx={{
          color: "white",
          textAlign: "center",
          padding: 4,
        }}
      >
        Esperando la respuesta de la API...
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{
          color: "white",
          textAlign: "center",
          padding: 4,
        }}
      >
        Puede tardar hasta 30 segundos en cargar después de un período de inactividad.
      </Typography>
    </Box>
  );
};

export default Loading;
