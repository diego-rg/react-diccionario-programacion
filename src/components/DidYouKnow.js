import React from "react";

import { Typography, Paper } from "@mui/material";

//Componente que renderiza los datos de un término aleatorio a modo de "Sabías que...?"
const DidYouKnow = ({ random }) => {
  return (
    <Paper
      component="aside"
      elevation={5}
      sx={{
        position: { xs: "static", xl: "absolute" },
        top: "80px",
        left: "35px",
        textAlign: "center",
        maxWidth: { xs: "82.23vw", md: 250 },
        maxHeight: { xs: 150, md: 150 },
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginX: "auto",
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
