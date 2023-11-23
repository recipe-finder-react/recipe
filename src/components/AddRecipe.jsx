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
    <>
      <h1 className="h1add">Add Reciepe</h1>
      <div className="container">
        <div className="cont-box">
          <div className="left">
            <br />
            <div className="right">
              <form onSubmit={handleSubmit}>
                <label className="nams">
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
                <label className="nams">
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
                <label className="nams">
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
                <label className="nams">
                  Ingredients:
                  <textarea
                    className="input"
                    rows="6"
                    type="text"
                    name="Ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                  />
                </label>
                <br />
                <div>
                  <label className="nams">
                    Instructions:
                    <textarea
                      className="input"
                      rows="6"
                      type="text"
                      name="Instructions"
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                    />
                  </label>
                </div>

                <br />
                <div className="btnadd">
                  <button className="btn" type="submit">
                    Add
                  </button>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
