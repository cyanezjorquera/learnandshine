

import logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        
        <div className="logo-container">
          <img src={logo} alt="Learn & Shine" className="hero-logo" />
        </div>

      <div className="hero-content">
        <p>Transformamos la vida de niños, niñas y adolescentes fortaleciendo sus 
          habilidades y entornos para que desarrollen su máximo potencial y 
          construyan un futuro con confianza.</p>
      </div>
      </div>
    </section>
  );
}

export default Hero;


