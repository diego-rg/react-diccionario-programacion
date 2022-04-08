import React from "react";

import { Typography, Paper } from "@mui/material";

//Componente que renderiza los datos de un término aleatorio a modo de "Sabías que...?"
const DidYouKnow = ({ random }) => {
  return (
    <Paper
      component="aside"
      elevation={5}
      sx={{
        textAlign: "center",
        maxWidth: { xs: 250, md: 300 },
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "RGB(255,171,0, 0.2)",
      }}
    >
      <Typography variant="h6" component="h6">
        Sabías que...?
      </Typography>
      <Typography variant="subtitle2" component="p">
        {`${random.name}: ${random.definition}`}
      </Typography>
    </Paper>
  );
};

export default DidYouKnow;
