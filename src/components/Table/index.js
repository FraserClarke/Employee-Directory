import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Row from "../Row/";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Table(props) {
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th>Photo</th>
          <th>
            name
            <span onClick={props.sortName}></span>
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee, index) => {
          console.log(JSON.stringify.employee);
          return  (<Row key={index}>{employee}</Row>)
        })}
      </tbody>
    </table>
  );
}

export default Table;
//export Navbar
// map props.employees to the Tablerow
// <Row key={} employee = {}>

// import React from "react";
// import "./style.css";

// function SearchResults(props) {
//   return (
//     <ul className="list-group search-results">
//       {props.results.map(result => (
//         <li key={result} className="list-group-item">
//           <img alt="Dog" src={result} className="img-fluid" />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default SearchResults;
