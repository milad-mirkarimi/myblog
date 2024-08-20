import { Link } from "react-router-dom";
import AuthService from "../services/authService";
import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import MoodButton from "./MoodButton";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
  const handleLogout = () => {
    AuthService.logout();
    setLoggedInUser(null);
  };

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    setLoggedInUser(currentUser);
  }, []);

  return (
    <header className="background-gradient text-white p-8 relative">
      <div className="flex">
        <h1 className="text-3xl md:text-4xl font-garamond">
          theGrumpContainment
        </h1>
        <MoodButton />
      </div>
      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/articles" className="hover:underline">
              Articles
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          {loggedInUser ? (
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
