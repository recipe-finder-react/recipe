import React from "react";
import { useEffect } from "react";

function Filter({ recipe, setFiltered, activeCuisin, setActivecuisin }) {
  useEffect(() => {
    if (activeCuisin === 0) {
      setFiltered(recipe);
      return;
    }
    const cuisine = recipe.filter((rcp) => rcp.cuisine.includes(activeCuisin));
    setFiltered(cuisine);
  }, [activeCuisin]);
  return (
    <div className="flex justify-center gap-2 mt-3">
      <button
        type="button"
        className="inline-flex items-center justify-center px-3 py-1.5 w-20 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 hover:scale-125"
        onClick={() => setActivecuisin(0)}
      >
        All
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-3 py-1.5 w-20 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 hover:scale-125"
        onClick={() => setActivecuisin("italian")}
      >
        Italien
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-3 py-1.5 w-20 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 hover:scale-125"
        onClick={() => setActivecuisin("america")}
      >
        American
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-3 py-1.5 w-20 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 hover:scale-125"
        onClick={() => setActivecuisin("Asian")}
      >
        Asian
      </button>
    </div>
  );
}

export default Filter;
