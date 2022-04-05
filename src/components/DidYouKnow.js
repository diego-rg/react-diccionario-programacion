import React, { useState, useEffect } from "react";
import diccionario from "../api/dictionary";

import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import IconButton from "@mui/material/IconButton";
import { Typography, Paper } from "@mui/material";

//Componente que hace una request a la Api del diccionario para obtener un término aleatorio y usarlo a modo de "Sabías que...?"
const DidYouKnow = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const random = async () => {
      setLoading(true);
      try {
        const { data } = await diccionario.get("/terms/random");
        setResult(data.random);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    random();
  }, []);

  return loading ? (
    <IconButton color="primary" size="large">
      <HourglassEmptyIcon />
    </IconButton>
  ) : (
    <Paper
      elevation={5}
      sx={{
        alignSelf: { md: "flex-end" },
        marginRight: {
          md: 15,
        },
        textAlign: "center",
        maxWidth: { xs: 250, md: 300 },
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(128,128,128, 0.4)",
      }}
    >
      <Typography variant="h6" component="h6">
        Sabías que...?
      </Typography>
      <Typography variant="subtitle2" component="p">
        {`${result.name}: ${result.definition}`}
      </Typography>
    </Paper>
  );
};

export default DidYouKnow;
