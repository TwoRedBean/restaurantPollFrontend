import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Restaurant Poll Application
        </a>
        <Link className="btn btn-outline-light" to="/addrestaurant">
          Add Restaurant
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
