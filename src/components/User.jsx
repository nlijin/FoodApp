import { useState } from "react";
const User = ({ name, phone, email, comptype }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <p>Component: {comptype} </p>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>email: {email}</p>
      <h3>count 1: {count}</h3>
      <h3>count 2: {count2}</h3>
    </div>
  );
};

export default User;
