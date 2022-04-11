import React from "react";

import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

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
        <CircularProgress />
      </Box>
      <Typography
        variant="h4"
        component="p"
        sx={{
          fontFamily: "Dancing Script",
          color: "white",
        }}
      >
        Esperando la respuesta de la API...
      </Typography>
    </Box>
  );
};

export default Loading;
