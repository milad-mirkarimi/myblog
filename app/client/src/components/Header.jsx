import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-8">
      <h1 className="text-5xl font-garamond">👋 Milad Mirkarimi</h1>
      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className="hover:underline hover:text-yellow-500"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline hover:text-yellow-500">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
