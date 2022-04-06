import React from "react";

import { Box, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      className="loading-component"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" component="p">
        Cargando...
      </Typography>
    </Box>
  );
};

export default Loading;
