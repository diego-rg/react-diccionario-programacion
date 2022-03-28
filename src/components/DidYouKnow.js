import React, { useState, useEffect } from "react";
import diccionario from "../api/dictionary";

//Componente que hace una request a la Api del diccionario para obtener un término aleatorio y renderizar sus datos a modo de "Sabías que...?"
const DidYouKnow = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const random = async () => {
      const { data } = await diccionario.get("/terms/random");
      setResult(data.random);
    };
    random();
  }, []);

  return (
    <div>
      <div>Sabías que...?</div>
      <div>{`${result.name}: ${result.definition}`}</div>
    </div>
  );
};

export default DidYouKnow;
