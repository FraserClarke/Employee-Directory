import React from "react";

function Row(props) {
  return (
    <tr>
      {/* <td>
        <img src={props.employee.picture.thumbnail} alt="profile" />
      </td> */}
      <td>{props.employee.name.first}</td>
      <td>{props.employee.name.last}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.cell}</td>
    </tr>
  );
}

export default Row;
