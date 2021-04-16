import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      {/* <nav class="navbar navbar-dark bg-primary"></nav> */}
      Employee Directory
    </nav>
  );
}

export default Navbar;
