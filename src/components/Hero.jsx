import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../hero2.css";
function Hero() {
  return (
<section className="hero">
  <div className="hero-overlay"></div>

  <div className="hero-content">
    <img src={logo} alt="Learn & Shine" className="hero-logo" />

    <h1>Aprender es Brillar</h1>

    <p>
      Transformamos la vida de niños, niñas y adolescentes fortaleciendo sus 
          habilidades y entornos para que desarrollen su máximo potencial y 
          construyan un futuro con confianza
    </p>
           
    <Link to="/trabajo" className="hero-btn">Conócenos</Link>
  </div>

  <div className="sparkles"></div>
</section>
  );
}

export default Hero;