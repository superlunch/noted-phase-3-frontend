import "./App.css";
import { Routes, Route, Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar sticky">
      <nav className="links">
        <Link className="HomeLink" to="/">
          <i className="bx bxs-home"></i>
        </Link>

        <Link className="FeedLink" to="/notes">
          <i className="bx bx-library"></i>
        </Link>

        <Link className="ProjectsLink" to="/new-note">
          <i className="bx bxs-pen"></i>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
