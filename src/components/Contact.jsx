
import { Link } from "react-router-dom";
import ContactoForm from "../components/ContactoForm";


function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contacto</h2>
      <p>📱 +56966735061</p>
      <p>📧 contacto@learnandshine.cl</p>
      
      <Link to="/escribenos" className="primary-btn">
      Escríbenos
    </Link>
    </section>
  );
}

export default Contact;
