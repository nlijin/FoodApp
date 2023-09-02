import { useState } from "react";
import useStatusOnline from "../utils/useStatusOnline";
const User = ({ name, phone, email, comptype }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  const onlineStatus = useStatusOnline();

  return (
    <div className="user-card">
      <h2>{onlineStatus ? "you are online" : "you are offline"}</h2>
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
