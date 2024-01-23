import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";

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
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md shadow-orange-500 ring-2 ring-yellow-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-700 underline uppercase decoration-wavy">
            Add Reciepe
          </h1>

          <form onSubmit={handleSubmit} className="mt-6">
            <label
              htmlFor="name"
              className="ml-px pl-4 block text-sm font-medium text-gray-700"
            >
              Name:
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label
              htmlFor="name"
              className="ml-px pl-4 block text-sm font-medium text-gray-700"
            >
              Cuisine:
              <input
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                name="Cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />{" "}
            </label>
            <br />
            <label
              htmlFor="name"
              className="ml-px pl-4 block text-sm font-medium text-gray-700"
            >
              Image:
              <input
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md ffocus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="url"
                name="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <br />
            <label
              htmlFor="name"
              className="ml-px pl-4 block text-sm font-medium text-gray-700"
            >
              Ingredients:
              <textarea
                className="
                   block
                   w-full
                   mt-2 px-16 py-8
                   border
                   rounded-md
                   shadow-sm
                   focus:border-orange-300
                   focus:ring
                   focus:ring-orange-200
                   focus:ring-opacity-50
                 "
                rows="5"
                type="text"
                name="Ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </label>
            <br />
            <div>
              <label
                htmlFor="name"
                className="ml-px pl-4 block text-sm font-medium text-gray-700"
              >
                Instructions:
                <textarea
                  className="
                    block
                     w-full
                     mt-2 px-16 py-8
                     border
                     rounded-md
                     shadow-sm
                     focus:border-indigo-300
                     focus:ring
                     focus:ring-indigo-200
                     focus:ring-opacity-50
                   "
                  rows="5"
                  type="text"
                  name="Instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </label>
            </div>

            <br />
            <div className="btnadd">
              <button
                className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-yellow-700 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-indigo-600"
                type="submit"
              >
                Add
              </button>
            </div>
            <br />
          </form>
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
