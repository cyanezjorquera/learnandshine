
import logo from '../assets/background.png';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Learn and Shine" />
      <div className="nav-links">
        <a href="#about">Nosotros</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
