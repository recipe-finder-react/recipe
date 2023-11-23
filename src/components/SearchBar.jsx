import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ setSearchTerm, searchTerm }) {

    const [searchInput, setSearchInput] = useState("");
  return (
    <div className="InputContainer">
    <input
      onChange={(e) => setSearchTerm(e.target.value)}
      type="text"
      value={searchTerm}
      placeholder="Search ......"
    />
    </div>
  );
}

export default SearchBar;
