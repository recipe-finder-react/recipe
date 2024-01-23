import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Allrecipe";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";
import RandomRecipe from "./components/RandomRecipe";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all" element={<HomePage />} />
        <Route path="/recipe/:recepid" element={<Recipe />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/recipe/edit/:recipid" element={<EditRecipe />} />
        <Route path="/randomrecipe" element={<RandomRecipe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
