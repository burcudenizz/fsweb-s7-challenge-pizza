import React from "react";

export default function Success(props) {
  const { alreadyOrdered } = props;
  console.log(alreadyOrdered);
  return (
    <div className="successOrder">
      {alreadyOrdered.map((user) => (
        <ul className="RegisteredContent">
          <li key="pizzatype">Member Name: {user.pizzatype}</li>
          <li key="pizzasize">Member Surname: {user.pizzasize}</li>
          <li key="doughsize">Member Email: {user.doughsize}</li>
        </ul>
      ))}
    </div>
  );
}
