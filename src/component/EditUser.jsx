//import { useState } from "react";
import { useSelector } from "react-redux";

export default function EditUser() {
    const user = useSelector(state => state.users)
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
            Add user
          </button>
        </div>
      </div>
    </div>
  );
}
