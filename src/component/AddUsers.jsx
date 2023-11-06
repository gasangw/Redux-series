import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/features/Users/Users";
import { nanoid } from "nanoid";

export default function AddUsers() {
    const dispatch = useDispatch()
   const [ user, setUser] = useState({
         name: '',
         email: ''
   })

   const handleInput = (e) => {
    const { name, value} = e.target
   setUser(prevState => {
    return {
        ...prevState,
        [name]: value
    }
   })
}

const addUserHandler = (e) => {
    e.preventDefault()
    if(email === '' || name === '') return alert('Please fill in all fields')
    dispatch(addUser({id:nanoid(), name, email}))
    setUser({
        name: '',
        email: ''
    })
}

const { name, email } = user
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
          <button className="button-primary" onClick={addUserHandler}>Add user</button>
        </div>
      </div>
    </div>
  );
}
