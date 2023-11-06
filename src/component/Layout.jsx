import { Link } from "react-router-dom";
import "./styles.css";

export default function Layout() {
  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 20}}>
      <div className="row">
        <div className="two columns">
          <button className="button-primary" style={{ paddingLeft: 10 }}>
            <Link to="/" className="mylink">
              Load users
            </Link>
          </button>
        </div>
        <div className="two columns">
          <button className="button-primary">
            <Link to="/adduser" className="mylink">
              Add user
            </Link>
          </button>
        </div>
        <div className="two columns">
          <button className="button-primary">
            <Link to="/" className="mylink">
              Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
