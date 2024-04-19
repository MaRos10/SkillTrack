import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="navUl">
      <li>
        <Link to="/" className="navLink">
          Home
        </Link>
      </li>
      <li>
        <Link to="/htmlcss" className="navLink">
          HTML & CSS
        </Link>
      </li>
      <li>
        <Link to="/javascript" className="navLink">
          JavaScript
        </Link>
      </li>
      <li>
        <Link to="/react" className="navLink">
          React
        </Link>
      </li>
    </ul>
  );
}
