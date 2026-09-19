import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "../config";

export default function MobileBar() {
  return (
    <div className="mobile-bar">
      <div className="mobile-bar-inner">
        <div className="mobile-bar-text">
          <span className="mobile-bar-title">Meridian Maths</span>
          <span className="mobile-bar-subtitle">20-Min Free Trial</span>
        </div>
        <a
          className="btn-primary"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          <span>Book Trial</span>
        </a>
      </div>
    </div>
  );
}
