import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Search(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.handleInputChange}
          value={props.searchValue}
          type="text"
          placeholder="Enter names to filter"
        />
      </form>
    </div>
  );
}

export default Search;
