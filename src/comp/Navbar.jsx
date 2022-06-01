import React, { useContext } from "react";
import { Authorization } from "./Context/AuthContext";
import { ThemeContext } from "./Context/ThemeContext";
import Wishlist from "./Wishlist";

const Navbar = () => {
  const { isAuthent, login, logout } = useContext(Authorization);
  const { toggle, isLight } = useContext(ThemeContext);
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${isLight ? "navbar-light" : "navbar-dark"} ${isLight ? "bg-light" : "bg-dark"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <div className="d-flex">
            <div className="form-check form-switch mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onChange={toggle}
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {isLight ? "Dark" : "Light"}
              </label>
            </div>
            <div>
              <Wishlist />
            </div>

            <div>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  if (isAuthent) logout();
                  else login("p", "y");
                }}
              >
                {isAuthent ? "logout" : "login"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      
    </div>
  );
};

export default Navbar;
