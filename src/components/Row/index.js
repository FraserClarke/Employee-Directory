import React from "react";

function Row(props) {
  return (
    <tr>
      <td>
        <img src={props.employee.picture.thumbnail} alt="profile" />
      </td>
      <td>
        {props.employee.name.first}
        {props.employee.name.last}
      </td>
      <td>{props.employee.cell}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.dob.age}</td>
      
    </tr>
  );
}

export default Row;
