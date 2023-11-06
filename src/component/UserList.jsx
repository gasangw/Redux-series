import { useSelector } from "react-redux";

export default function UserList() {
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
            <td>
              <button>Delete</button>
              <button>Edit</button>
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
      <div className="row">
        <div className="two columns">
          <button className="button-primary">Load users</button>
        </div>
        <div className="two columns">
          <button className="button-primary">Add user</button>
        </div>
      </div>
      <div className="row">{users}</div>
    </div>
  );
}
