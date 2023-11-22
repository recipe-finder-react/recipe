import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ setSearchTerm, searchTerm }) {

    const [searchInput, setSearchInput] = useState("");
  return (
    <input
      onChange={(e) => setSearchTerm(e.target.value)}
      type="text"
      value={searchTerm}
    />
  );
}

export default SearchBar;
