import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL = "https://yassine-backend-test1.adaptable.app";

function Recipe() {
  const [recep, setrecep] = useState([]);
  const [active, setActive] = useState("ingredients");
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
    <section>
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          {recep && (
            <>
              <img
                className="object-cover object-center border-solid border-2 border-orange-700 hover:opacity-90 lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
                src={recep.image}
              />
              <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 lg:text-3xl lg:w-96">
                  {recep.name}
                </h1>

                <h4 className=" font-semibold text-gray-800 dark:text-white mb-2 lg:text-xl lg:w-96">
                  Cuisine :<span> {recep.cuisine}</span>
                </h4>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    onClick={() => setActive("ingredients")}
                  >
                    Ingrediant
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    onClick={() => setActive("instructions")}
                  >
                    Instruction
                  </button>
                </div>

                <div className="mt-6 text-lg font-medium ">
                  {active === "ingredients" && (
                    <ul className="max-w-md space-y-1 text-gray-900 list-disc list-inside dark:text-gray-400">
                      {recep.ingredients?.map((ing) => (
                        <li key={ing.id}>{ing}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <p className="mt-6 text-lg font-medium">
                  {active === "instructions" && (
                    <p className="mb-3 text-gray-900 dark:text-gray-400 ">
                      {recep.instructions}
                    </p>
                  )}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
export default Recipe;
