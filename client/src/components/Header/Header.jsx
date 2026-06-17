import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <Link to="/">Lingo Bot</Link>
        </h1>

        {location.pathname === "/" ? (
          ""
        ) : (
          <Link to="/">
            <button className="header__btn">Home</button>
          </Link>
        )}
      </div>
    </header>
  );
}
