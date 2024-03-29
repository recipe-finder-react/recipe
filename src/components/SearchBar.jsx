import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SearchBar({ setSearchTerm, searchTerm }) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="flex space-x-1">
          <input
            className="block w-full px-4 py-2 text-ornage-700 bg-amber-50 border-2 border-orange-500  rounded-full focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            id="searchStr"
            aria-label="Search"
            aria-describedby="button-addon2"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button className="px-4 text-white bg-orange-600 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
