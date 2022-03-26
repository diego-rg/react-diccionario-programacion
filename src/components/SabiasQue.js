import React, { useState, useEffect } from "react";
import diccionario from "../api/diccionario";

const SabiasQue = () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    const random = async () => {
      const { data } = await diccionario.get("/terms/random");
      setResult(data.random);
      console.log(data.random);
    };
    random();
  }, []);
  return (
    <div>
      <h1>{result.name}</h1>
      <h2>{result.definition}</h2>
      <h3>{result.category}</h3>
    </div>
  );
};

export default SabiasQue;
