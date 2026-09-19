import WhatsAppIcon from "./WhatsAppIcon";

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
          <a href="#method" className="nav-link">Method</a>
          <a href="#curriculum" className="nav-link">Curriculum</a>
          <a href="#results" className="nav-link">Results</a>
          <a href="#tutor" className="nav-link">Tutor</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        <a className="top-cta" href="#book-trial">
          <WhatsAppIcon />
          <span>Book Free Trial</span>
        </a>
      </div>
    </header>
  );
}
