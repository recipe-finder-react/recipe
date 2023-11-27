import { useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams, useNavigate } from "react-router-dom";

const API_URL = "https://yassine-backend-test1.adaptable.app";

function EditRecipe() {
  const [nam, setNam] = useState("");
  const [cuisin, setCuisin] = useState("");
  const [imag, setImag] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [instruction, setInstruction] = useState("");

  const { recipid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/recipe/${recipid}`)
      .then((rep) => {
        const oneRecipe = rep.data;
        setNam(oneRecipe.nam);
        setCuisin(oneRecipe.cuisin);
        setImag(oneRecipe.imag);
        setIngredient(oneRecipe.ingredient);
        setInstruction(oneRecipe.instruction);
      })
      .catch((error) => console.log(error));
  }, [recipid]);

  //zjdnejnd
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      name: nam,
      cuisine: cuisin,
      image: imag,
      ingredients: ingredient,
      instructions: instruction,
    };
    axios
      .put(`${API_URL}/recipe/${recipid}`, requestBody)
      .then((reponse) => {
        navigate(`/recipe/${recipid}`);
      })
      .catch((error) => console.log(error));
  };

  //delete function
  const deletRecipe = () => {
    axios
      .delete(`${API_URL}/recipe/${recipid}`)
      .then(() => {
        navigate('/');
      })
      .catch((errdelt) => console.log(errdelt));
  };

  return (
    <div>
      <h1 className="h1edit">Edit Recipe</h1>
      <br />
      <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className="input"
            type="text"
            name="Name"
            value={nam}
            onChange={(e) => setNam(e.target.value)}
          />
        </label>
        <br />
        <label>
          Cuisine:
          <input
            className="input"
            type="text"
            name="Cuisine"
            value={cuisin}
            onChange={(e) => setCuisin(e.target.value)}
          />{" "}
        </label>
        <br />
        <label>
          Image:
          <input
            className="input"
            type="url"
            name="Image"
            value={imag}
            onChange={(e) => setImag(e.target.value)}
          />
        </label>
        <br />
        <label>
          Ingredients:
          <textarea
            className="input"
            type="text"
            name="Ingredients"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
        <br />
        <label>
          Instructions:
          <textarea
            className="input"
            type="text"
            name="Instructions"
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
          />
        </label>
        <br />
        <div className="btnedit">
        <Link to={'/'} >
                <button className="btn">Home Page</button>
        </Link>
        <button className="btn" type="submit">
          Edit
        </button>
        <br />
        <button className="btn" onClick={deletRecipe}>Delete Recipe</button>
       
        </div>
      </form>
      </div>
    </div>
  );
}

export default EditRecipe;