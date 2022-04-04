import React, { useState, useEffect } from "react";
import diccionario from "../api/dictionary";

import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

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
    <Box
      sx={{
        alignSelf: { md: "flex-end" },
        marginRight: {
          md: 15,
        },
        textAlign: "center",
        maxWidth: { xs: 200, md: 300 },
        padding: 2,
        boxShadow: 3,
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(128,128,128, 0.4)",
      }}
    >
      <Box
        sx={{
          paddingBottom: 0.5,
          fontFamily: "Dancing Script",
          fontSize: { xs: 20, md: 24 },
        }}
      >
        Sabías que...?
      </Box>
      <Box
        sx={{
          fontFamily: "roboto",
          fontSize: { xs: 14, md: 16 },
        }}
      >{`${result.name}: ${result.definition}`}</Box>
    </Box>
  );
};

export default DidYouKnow;
