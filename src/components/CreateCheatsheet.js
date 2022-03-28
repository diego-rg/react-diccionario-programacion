import React, { useState } from "react";

//Componente que hace una request a la Api del diccionario para obtener terms los términos y ver su definición al hacer click en ellos
//Recibimos terms, categories como props
const CreateCheatsheet = ({ terms, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [savedTerms, setSavedTerm] = useState([]);

  //función para guardar un término
  const saveTerm = (term) => {
    if (!savedTerms.includes(term)) {
      setSavedTerm([...savedTerms, term]);
    }
  };

  //función para guardar un término
  const deleteTerm = (term) => {
    let index = savedTerms.indexOf(term); //calculamos o índice dos terms poder selecionalo e eliminalo
    savedTerms.splice(index, 1); //eliminamos o seleccionado polo seu indice
    setSavedTerm([...savedTerms]); //gardamos o novo array si o eliminado
  };

  //Botones de cada término añadido para poder eliminarlo
  const renderedSavedTerms = !savedTerms.length
    ? "Haz click en un término para añadirlo a tus apuntes."
    : savedTerms.map((term) => {
        return (
          <button onClick={() => deleteTerm(term)} key={term._id}>
            {term.name}
          </button>
        );
      });

  //Botones de cada término que añaden el término en los apuntes
  const renderedTerms = terms.map((term) => {
    return (
      <button onClick={() => saveTerm(term)} key={term._id}>
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
        <button onClick={() => saveTerm(term)} key={term._id}>
          {term.name}
        </button>
      );
    });

  return (
    <div>
      <div>
        <button onClick={() => setSelectedCategory(null)} key="terms">
          Todos
        </button>
        {renderedCategories}
      </div>
      <div>{selectedCategory ? termsByCategory : renderedTerms}</div>
      <br />
      <div>{renderedSavedTerms}</div>
    </div>
  );
};

export default CreateCheatsheet;
