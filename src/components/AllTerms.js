import React, { useState, useEffect } from "react";
import diccionario from "../api/diccionario";

//Componente que hace una request a la Api del diccionario para obtener todos los términos
const SabiasQue = () => {
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [termSelected, setTermSelected] = useState("");

  useEffect(() => {
    const allTerms = async () => {
      const { data } = await diccionario.get("/terms/all");
      setResults(data.terms);
    };
    allTerms();
  }, []);

  const renderedResults = results.map((result) => {
    return <button key={result._id}>{result.name}</button>;
  });

  return <div>{renderedResults}</div>;
};

export default SabiasQue;
