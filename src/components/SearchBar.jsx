import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function SearchBar({ setSearchTerm, searchTerm }) {

    const [searchInput, setSearchInput] = useState("");
  return (
    <>
    <div className="ser">
    <div className="search-box">    
    <input className="form-control" id="searchStr" type="text" placeholder="Search"
      onChange={(e) => setSearchTerm(e.target.value)}
      
      value={searchTerm}
    />
    </div>
    <div>
    <Link to="/addRecipe">
     <button className="btn"><strong>+ Add Recipe </strong> </button>
     </Link>
    </div>
    </div>
    
     </>
     
  );
}

export default SearchBar;
