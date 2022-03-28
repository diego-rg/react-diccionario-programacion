import React, { useState, useEffect } from "react";
import dictionary from "./api/dictionary";
import DidYouKnow from "./components/DidYouKnow";
import CheckTerms from "./components/CheckTerms";
import CreateCheatsheet from "./components/CreateCheatsheet";

const App = () => {
  const [terms, setTerms] = useState([]);
  const [categories, setCategories] = useState([]);

  //fetch all terms
  useEffect(() => {
    const allTerms = async () => {
      const { data } = await dictionary.get("/terms/all");
      setTerms(data.terms);
    };
    allTerms();
  }, []);

  //fetch all categs
  useEffect(() => {
    const allCategories = async () => {
      const { data } = await dictionary.get("/terms/categories");
      setCategories(data.categories);
    };
    allCategories();
  }, []);

  //Pasamos os terms e as categories como props
  return (
    <div>
      <DidYouKnow />
      <CheckTerms terms={terms} categories={categories} />
      <br />
      <br />
      <CreateCheatsheet terms={terms} categories={categories} />
    </div>
  );
};

export default App;
