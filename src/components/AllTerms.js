import React, { useState, useEffect } from "react";
import diccionario from "../api/diccionario";

//Componente que hace una request a la Api del diccionario para obtener todos los términos y ver su definición al hacer click en ellos
const SabiasQue = () => {
  const [terms, setTerms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  //Botones de cada término que escriben la definición en el textarea
  const renderedTerms = terms.map((term) => {
    return (
      <button onClick={() => setSelectedTerm(term)} key={term._id}>
        {term.name}
      </button>
    );
  });

  //Botones de cada categoría que filtran los términos
  const renderedCategories = categories.map((category) => {
    return (
      <button onClick={() => setSelectedCategory(category)} key={category}>
        {category}
      </button>
    );
  });

  //Función filtrar por categorías
  const termsByCategory = terms
    .filter((t) => t.category === selectedCategory)
    .map((term) => {
      return (
        <button onClick={() => setSelectedTerm(term)} key={term._id}>
          {term.name}
        </button>
      );
    });

  return (
    <div>
      <div>
        <button onClick={() => setSelectedCategory(null)} key="todos">
          Todos
        </button>
        {renderedCategories}
      </div>
      <div>{selectedCategory ? termsByCategory : renderedTerms}</div>
      <textarea
        name="definitions"
        id="definitions"
        cols="75"
        rows="5"
        value={
          selectedTerm
            ? `${selectedTerm.name}: ${selectedTerm.definition}`
            : "Haga click en un término para ver su definición."
        }
        onChange={(e) => setSelectedTerm(e.target.value)}
      ></textarea>
    </div>
  );
};

export default SabiasQue;
