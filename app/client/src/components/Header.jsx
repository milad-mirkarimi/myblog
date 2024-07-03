import { Link } from "react-router-dom";
import AuthService from "../services/authService";
import React, { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!AuthService.getCurrentUser());
  const handleLogout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
  };

  return (
    <header className="background-gradient text-white p-8">
      <h1 className="text-4xl font-garamond">Milad Mirkarimi</h1>
      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className="hover:underline"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:underline"
            >
              Logout
            </button>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
