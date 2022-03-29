import React, { useState, useEffect } from "react";
import dictionary from "./api/dictionary";
import DidYouKnow from "./components/DidYouKnow";
import CheckTerms from "./components/CheckTerms";
import CreateCheatsheet from "./components/CreateCheatsheet";
import Header from "./components/Header";
import Route from "./components/Route";
import Home from "./components/Home";
import ApiInfo from "./components/ApiInfo";

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
    <div className="app-container">
      <Header />
      <Route path="/">
        <Home />
        <DidYouKnow />
      </Route>
      <Route path="/api">
        <ApiInfo />
      </Route>
      <Route path="/dictionary">
        <CheckTerms terms={terms} categories={categories} />
      </Route>
      <Route path="/cheatsheet">
        <CreateCheatsheet terms={terms} categories={categories} />
      </Route>
    </div>
  );
};

export default App;
