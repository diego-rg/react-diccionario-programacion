import React, { useState, useEffect } from "react";
import diccionario from "../api/dictionary";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";

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
    <Box>
      <Box>Sabías que...?</Box>
      <Box>{`${result.name}: ${result.definition}`}</Box>
    </Box>
  );
};

export default DidYouKnow;
