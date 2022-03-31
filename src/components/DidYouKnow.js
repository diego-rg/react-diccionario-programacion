import React, { useState, useEffect } from "react";
import diccionario from "../api/dictionary";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import IconButton from "@mui/material/IconButton";

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
    <div>
      <div>Sabías que...?</div>
      <div>{`${result.name}: ${result.definition}`}</div>
    </div>
  );
};

export default DidYouKnow;
