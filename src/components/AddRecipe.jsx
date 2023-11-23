import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "https://yassine-backend-test1.adaptable.app";

function AddRecipe() {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      name: name,
      cuisine: cuisine,
      image: image,
      ingredients: ingredients,
      instructions: instructions,
    };
    axios
      .post(`${API_URL}/recipe`, requestBody)
      .then(() => {
        navigate("/addRecipe");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Add Reciepe</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className="input"
            type="text"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Cuisine:
          <input
            className="input"
            type="text"
            name="Cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />{" "}
        </label>
        <br />
        <label>
          Image:
          <input
            className="input"
            type="url"
            name="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <br />
        <label>
          Ingredients:
          <input
            className="input"
            type="text"
            name="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </label>
        <br />
        <label>
          Instructions:
          <input
            className="input"
            type="text"
            name="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </label>{" "}
        <br />
        <button className="addBtn" type="submit">
          Add
        </button>
        <br />
      </form>
    </div>
  );
}

export default AddRecipe;
