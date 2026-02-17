import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { MapPin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contacto-section">

      <div className="contacto-grid">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="contacto-form">

          <div className="contacto-info">

  <div className="contacto-card">

    <div className="contacto-item">
      <Phone size={20} />
      <div>
        <span className="contacto-label"></span>
        <a
          href="https://wa.me/56966735061"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-dato"
        >
          +56 9 6673 5061
        </a>
      </div>
    </div>

    <div className="contacto-item">
      <Mail size={20} />
      <div>
        <span className="contacto-label"></span>
        <a
          href="mailto:contacto@learnandshine.cl"
          className="contacto-dato"
        >
          contacto@learnandshine.cl
        </a>
      </div>
    </div>
 <div className="contacto-boton">
          <Link to="/escribenos" className="primary-btn">
          Escríbenos
          </Link>
          </div>

  </div>

</div>


          
         

        </div>

        {/* COLUMNA DERECHA */}
        <div className="contacto-mapa">
 <MapPin size={16} />
            <span>Chile</span>
          <div className="map-container">
            <iframe
              title="Ubicación Viña del Mar"
              src="https://www.google.com/maps?q=Viña%20del%20Mar,%20Chile&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
