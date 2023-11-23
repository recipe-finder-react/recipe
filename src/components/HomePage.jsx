import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";

const API_URL = "https://yassine-backend-test1.adaptable.app";

function HomePage() {
  const [recipe, setRecipe] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

  const getAllRecipe = () => {
    axios
      .get(API_URL + "/recipe")
      .then((response) => {
        setRecipe(response.data);
        setFiltered(response.data);
      })
      .catch((error) => {
        console.log("Error getting recipe from the API...");
        console.log(error);
      });
  };

  useEffect(() => {
    searchTerm
      ? setFiltered(
          recipe.filter((element) =>
            element.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      : setFiltered(recipe);
  }, [searchTerm]);

  useEffect(() => {
    getAllRecipe();
  }, []);

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

      <div id="container">
        {filtered.map((rcp, k) => {
          return (
            <div className="card" key={k}>
              <img className="img" src={rcp.image} />
              <br />
              <div className="card__details">
                <h2>{rcp.name} </h2>
                <br />
                <span className="tag">{rcp.cuisine}</span>
                <br />
                <div className="btnhome">
                  <Link to={`/recipe/${rcp.id}`}>
                    <button className="btn">Recipe Details</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default HomePage;
