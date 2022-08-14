import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <h1>
        <Link to="/CRUD-Blog-redux-toolkit">Redux Blog</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/CRUD-Blog-redux-toolkit">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
