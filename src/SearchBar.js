// SearchBox.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./search.css";

const SearchBar = () => {
  return (
    <div>
      <div className="search-bar">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search..."
            className="input"           
          />
          <span className="search-icon">
            <FontAwesomeIcon icon={faSearch}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
