import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "../config";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <a href="#" className="brand-wrapper">
          <div className="brand-logo-icon">M</div>
          <div className="wordmark">
            Meridian <span>Maths</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#why-us" className="nav-link">Why Us</a>
          <a href="#method" className="nav-link">3-Step Method</a>
          <a href="#results" className="nav-link">Results</a>
          <a href="#tutor" className="nav-link">Tutor</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        <a className="top-cta" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          <span>Book Free Trial</span>
        </a>
      </div>
    </header>
  );
}
