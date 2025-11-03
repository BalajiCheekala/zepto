import "./zeptoSearchBar.css";
import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="SearchBar">
      <i className="fa-solid fa-magnifying-glass searchIcon"></i>
      <input
        type="text"
        placeholder="Search for products, brands, and more..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
