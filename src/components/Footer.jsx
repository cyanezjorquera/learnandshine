import {
   Instagram,
  Facebook,
  MessageCircle,
  Music2,
  MessageSquare
} from "lucide-react";
import { siTiktok } from "simple-icons/icons";

import { Link } from "react-router-dom";  
import { MapPin } from "lucide-react";


function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-content">
        <div className="footer-socials">

  {/* Instagram */}
  <a
    href="https://www.instagram.com/corporacion.learnandshine"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm8.25 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M22 12a10 10 0 10-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.88h-2.3v6.99A10 10 0 0022 12z"/>
    </svg>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/56966735061"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12.04 2C6.57 2 2.13 6.43 2.13 11.9c0 1.9.5 3.74 1.46 5.36L2 22l4.85-1.56a9.86 9.86 0 005.19 1.46h.01c5.47 0 9.9-4.43 9.9-9.9S17.5 2 12.04 2z"/>
    </svg>
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/learnandshine.corp"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12.75 2h3.25a4.5 4.5 0 004.5 4.5v3.25a7.75 7.75 0 01-4.5-1.5v6.5a5.75 5.75 0 11-5.75-5.75c.25 0 .5.02.75.05v3.32a2.5 2.5 0 102.5 2.38V2z"/>
    </svg>
  </a>

  {/* Threads */}
  <a
    href="https://www.threads.net/corporacion.learnandshine"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.03 2 11.04c0 4.14 3.1 7.52 7.2 7.96v-5.63H7.08v-2.33h2.12V9.41c0-2.1 1.24-3.26 3.14-3.26.91 0 1.86.16 1.86.16v2.05h-1.05c-1.04 0-1.37.63-1.37 1.28v1.53h2.34l-.37 2.33h-1.97V19c4.1-.44 7.2-3.82 7.2-7.96C22 6.03 17.52 2 12 2z"/>
    </svg>
  </a>

</div>

      

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Corporación Learn & Shine · Todos los derechos reservados
      </div>

    </footer>
  );
}

export default Footer;
