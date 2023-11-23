import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:recepid" element={<Recipe />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/recipe/edit/:recipid" element={<EditRecipe />} />
       
      </Routes>
    </>
  );
}

export default App;
