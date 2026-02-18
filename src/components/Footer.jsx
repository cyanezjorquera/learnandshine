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
    href="https://www.facebook.com/LearnandShine"
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
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M16.7 7.3c-1.1-1.1-2.6-1.7-4.5-1.7-3.8 0-6.2 2.5-6.2 6.2 0 3.5 2.2 6 5.6 6 3 0 5.2-1.9 5.2-4.7 0-2.4-1.6-4-4.1-4-1.6 0-2.8.9-3.3 2.2l1.8.5c.2-.6.8-1 1.5-1 1.2 0 2 .8 2 2 0 1.6-1.2 2.6-2.9 2.6-2.3 0-3.7-1.7-3.7-4 0-2.6 1.6-4.3 4.2-4.3 1.3 0 2.2.4 2.9 1.1.5.5.9 1.2 1 2.2-.5-.2-1.2-.3-2-.3v1.6c2.5 0 4.3 1.3 4.3 3.8 0 3.3-2.8 5.6-6.8 5.6C6.5 22 3 18.5 3 13.2 3 7.8 6.7 4 12.2 4c2.5 0 4.4.8 5.9 2.3L16.7 7.3z"/>
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
