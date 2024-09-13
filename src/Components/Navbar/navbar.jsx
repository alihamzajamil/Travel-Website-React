
import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ children }) => {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container">
          <h1 className="logo lg-heading  text-light">WT</h1>
          <ul className="nav-items">
            <l1 className="nav-item">
              <Link to={"/"}>Home</Link>
            </l1>
            <l1 className="nav-item">
              <Link to={"/About"}>About</Link>
            </l1>
            <l1 className="nav-item">
              <Link to={"/Contact"}>Contact</Link>
            </l1>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
};
export default Navbar;
