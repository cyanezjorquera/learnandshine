import { Link, useLocation } from "react-router-dom";
import logo from "../assets/background.png";

function Navbar() {
  const location = useLocation();

  // Detecta si estamos en Home
  const isHome = location.pathname === "/";

  return (
    <nav className="navbar">

      {/* LOGO CLICKEABLE */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="Learn and Shine" className="logo" />
      </Link>

      {/* LINKS */}
      <div className="nav-links">
        <Link to="/">Inicio</Link>

        {isHome && (
          <>
            <a href="#about">Nosotros</a>
            <a href="#services">Servicios</a>
            <a href="#contact">Contacto</a>
          </>
        )}
      </div>

    </nav>
  );
}

export default Navbar;
