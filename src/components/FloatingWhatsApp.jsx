import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "../config";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Chat on WhatsApp"
      >
        <span className="floating-ping"></span>
        <div className="floating-icon-box">
          <WhatsAppIcon />
        </div>
        <span className="floating-text">Book Free Trial</span>
      </a>
    </aside>
  );
}
