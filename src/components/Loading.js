import React from "react";

import { Box, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        component="p"
        sx={{
          fontFamily: "Dancing Script",
        }}
      >
        Cargando...
      </Typography>
    </Box>
  );
};

export default Loading;
