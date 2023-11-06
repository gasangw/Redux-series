import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../Redux/features/Users/Users"; 
import "./styles.css";
import { Link } from "react-router-dom";

export default function UserList() {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
      dispatch(deleteUser(id))
    }
  const users = useSelector((state) => state.users).map((user) => {
    return (
      <table className="u-full-width" key={user.id}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className="btns">
              <button onClick={() => handleDelete(user.id)}>Delete</button>
              <button>
                <Link to={`/edituser/${user.id}`}>Edit</Link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <h1>Redux Contact List</h1>
      </div>
      <div className="row">{users}</div>
    </div>
  );
}
