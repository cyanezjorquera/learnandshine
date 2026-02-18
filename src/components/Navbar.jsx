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

  <Link 
    to="/" 
    className="logo-link" 
    onClick={() => setOpen(false)}
  >
    <img src={logo} alt="Learn and Shine" />
  </Link>

  <div className={`nav-links ${open ? "active" : ""}`}>
    {!isHome ? (
  <>
    <Link to="/#hero" onClick={() => setOpen(false)}>Inicio</Link>
    <Link to="/#about" onClick={() => setOpen(false)}>Nosotros</Link>
    <Link to="/#services" onClick={() => setOpen(false)}>Servicios</Link>
    <Link to="/#contact" onClick={() => setOpen(false)}>Contacto</Link>
  </>
) : (
  <>
<Link
  to="/"
  onClick={() => {
    setOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }}
>
  Inicio
</Link>
    <a href="#about" onClick={() => setOpen(false)}>Nosotros</a>
    <a href="#services" onClick={() => setOpen(false)}>Servicios</a>
    <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
  </>
)}

  </div>

  <div className="menu-toggle" onClick={() => setOpen(!open)}>
    {open ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
  </div>

</nav>
  );  }


export default Navbar;
