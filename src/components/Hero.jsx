

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../hero.css";


function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        
        <div className="logo-container">
          <img src={logo} alt="Learn & Shine" className="hero-logo" />
        </div>

      <div className="hero-content">
        <p>Transformamos la vida de niños, niñas y adolescentes fortaleciendo sus 
          habilidades y entornos para que desarrollen su máximo potencial y 
          construyan un futuro con confianza.</p>
        <Link to="/trabajo" className="primary-btn">
        Conócenos
        </Link>
      </div>
 



      </div>
   
    </section>
  );
}

export default Hero;


