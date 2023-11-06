import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editUser } from "../Redux/features/Users/Users";

export default function EditUser() {
  const { id } = useParams();
  const user = useSelector((state) => state.users).find(
    (user) => user.id === id
  );
  const [users, setUsers] = useState({
    name: user.name,
    email: user.email,
  });
  const dispatch = useDispatch();
  const { name, email } = users;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUsers((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const addUserHandler = (e) => {
    e.preventDefault();
    dispatch(editUser({ id: id, name: users.name, email: users.email }));
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            name="name"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleInput}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            name="email"
            onChange={handleInput}
            value={email}
          />
          <button className="button-primary" onClick={addUserHandler}>
            Edit user
          </button>
        </div>
      </div>
    </div>
  );
}
