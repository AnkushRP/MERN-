/*import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="btn btn-primary mx-1" to="/auth?mode=signin">
          Login
        </Link>
        <Link className="btn btn-primary mx-1" to="/auth?mode=signup">
          Signup
        </Link>
      </div>
    </nav></>
  );
};

export default Navbar;*/
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="btn btn-primary mx-1" to="/login">
          Login
        </Link>
        <Link className="btn btn-primary mx-1" to="/signup">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

