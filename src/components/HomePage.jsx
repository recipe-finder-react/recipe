import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";


function HomePage(){
    const [recipe, setRecipe] = useState([]);

  const getAllRecipe = () => {
    axios
      .get(API_URL + "/recipe")
      .then((response) => {
        setRecipe(response.data);
        console.log(recipe);
      })
      .catch((error) => {
        console.log("Error getting recipe from the API...");
        console.log(error);
      });
  };

  useEffect(() => {
    getAllRecipe();
  }, []);

  return (
    <>
    
      <div className="card">
        {recipe.map((rcp, k) => {
          return (
            <ul key={k}>
                <li>
              <img className="img" src={rcp.image} />
              <br />
              <h2>{rcp.name} </h2>
              <br />
              <h3>{rcp.cuisin}</h3>
              <br/>
              <Link to={`/recipe/${rcp.id}`}>
            <button className="btn">Recipe Details</button>
            </Link>
            </li>
            </ul>
          );
        })}
      </div>
     
    </>
  );
}
export default HomePage