import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL = "https://yassine-backend-test1.adaptable.app";

function Recipe() {
  const [recep, setrecep] = useState([]);
  const { recepid } = useParams();

  const getRecep = () => {
    axios
      .get(`${API_URL}/recipe/${recepid}`)
      .then((reponse) => setrecep(reponse.data))

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRecep();
  }, []);

  return (
    <div>
      {recep && (
        <>
          <div className="recipediv">
            <img className="recipeImage" src={recep.image} />
            <br />
            <div className="divnamdetail">
              <h1 className="recepname">{recep.name}</h1>
              <br />
              <h2 className="center">Cuisine : {recep.cuisine}</h2>
              <br />
              <span>
                {" "}
                <h2>Ingredients :</h2>
                {recep.ingredients}
              </span>

              <br />
              <p className="par">
                {" "}
                <h2>Instructions :</h2>
                {recep.instructions}
              </p>
            </div>
            <br />
            <div className="btnrecipe">
            <Link to={`/recipe/edit/${recep.id}`}>
              <button className="btn">Edit recipe</button>
            </Link>
          </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Recipe;
