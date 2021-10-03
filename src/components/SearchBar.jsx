import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar-component">
      <form>
        <fieldset>
          <label id="filter">Search</label>
          <input
            id="filterInput"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default SearchBar;
