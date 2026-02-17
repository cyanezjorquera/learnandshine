function Footer() {
  return (
    <footer className="footer">

      <div className="social-section">
        <p className="social-text">
          Si quieres participar con nosotros síguenos en redes sociales y grupos WhatsApp.
        </p>

        <div className="social-icons">

          <a
            href="https://www.instagram.com/corporacion.learnandshine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>

          <a
            href="https://www.facebook.com/LearnandShine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>

          <a
            href="https://wa.me/56966735061"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/whatsapp.png" alt="WhatsApp" />
          </a>

          <a
            href="https://www.tiktok.com/learnandshine.corp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/tiktok.png" alt="TikTok" />
          </a>

          <a
            href="https://www.threads.net/corporacion.learnandshine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/threads.png" alt="Threads" />
          </a>

        </div>
      </div>
      
      <div className="footer-copy">
        <br></br>
        © {new Date().getFullYear()} Learn and Shine | www.learnandshine.cl
      </div>

    </footer>
  );
}

export default Footer;

