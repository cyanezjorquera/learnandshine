import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/background.png";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo-link" onClick={() => setOpen(false)}>
        <img src={logo} alt="Learn and Shine" />
      </Link>

      {/* LINKS DESKTOP */}
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
      <div className="menu-toggle">
  <Menu size={40} color="red" />
</div>


      {/* HAMBURGUESA */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
      </div>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>

        {isHome && (
          <>
            <a href="#about" onClick={() => setOpen(false)}>Nosotros</a>
            <a href="#services" onClick={() => setOpen(false)}>Servicios</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
          </>
        )}
      </div>

    </nav>
  );
}

export default Navbar;
