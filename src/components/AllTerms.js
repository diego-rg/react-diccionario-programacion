import React, { useState, useEffect } from "react";
import diccionario from "../api/diccionario";

//Componente que hace una request a la Api del diccionario para obtener todos los términos
const SabiasQue = () => {
  const [terms, setTerms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);

  //fetch all terms
  useEffect(() => {
    const allTerms = async () => {
      const { data } = await diccionario.get("/terms/all");
      setTerms(data.terms);
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

  const renderedTerms = terms.map((term) => {
    return (
      <button onClick={() => setSelectedTerm(term)} key={term._id}>
        {term.name}
      </button>
    );
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
      <textarea
        name="definitions"
        id="definitions"
        cols="100"
        rows="5"
        value={
          selectedTerm
            ? selectedTerm.definition
            : "Haga click en un término para ver su definición."
        }
        onChange={(e) => setSelectedTerm(e.target.value)}
      ></textarea>
    </div>
  );
};

export default SabiasQue;
