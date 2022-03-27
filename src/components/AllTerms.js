import React, { useState, useEffect } from "react";
import diccionario from "../api/diccionario";

//Componente que hace una request a la Api del diccionario para obtener todos los términos
const SabiasQue = () => {
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [termSelected, setTermSelected] = useState("");

  //fetch all terms
  useEffect(() => {
    const allTerms = async () => {
      const { data } = await diccionario.get("/terms/all");
      setResults(data.terms);
    };
    allTerms();
  }, []);

  //fetch all categs
  useEffect(() => {
    const allCategories = async () => {
      const { data } = await diccionario.get("/terms/categories");
      setCategories(data.categories);
    };
    allCategories();
  }, []);

  const renderedTerms = results.map((result) => {
    return <button key={result._id}>{result.name}</button>;
  });

  const renderedCategories = categories.map((category) => {
    return <button key={category}>{category}</button>;
  });

  return (
    <div>
      <div>
        <button key="todos">Todos</button>
        {renderedCategories}
      </div>
      <div>{renderedTerms}</div>
    </div>
  );
};

export default SabiasQue;
