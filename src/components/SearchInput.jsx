import React from "react";

const SearchInput = () => {
  return (
    <form className="forme">
      <input
        className="searchInput"
        type="text"
        placeholder="Find what you need..."
      />
      <button className="searchIcon" type="submit">
        {" "}
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
      </button>
    </form>
  );
};

export default SearchInput;


