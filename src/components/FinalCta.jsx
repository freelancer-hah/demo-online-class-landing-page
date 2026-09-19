import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_NUMBER, WHATSAPP_LINK } from "../config";

const chips = [
  { label: "Book Free Trial", msg: "Hi Meridian Maths, I'd like to book a 20-min free trial diagnostic class." },
  { label: "Ask for Fee & Timing", msg: "Hi Meridian Maths, please share available slots and fee structure for O-Level Maths." },
  { label: "Past Paper Syllabus Check", msg: "Hi Meridian Maths, I have some questions about my child's upcoming mock paper." },
];

export default function FinalCta() {
  return (
    <section className="final-cta" id="book">
      <div className="container">
        <div className="cta-box-inner">
          <div className="tag">
            ⚡ Upcoming Exam Mock Season · Limited Weekly Slots
          </div>
          <h2>Book your child's 20-min free diagnostic class this week</h2>
          <p>
            One live diagnostic session with zero obligations. You will get an honest, clear breakdown of where your child stands and how to lock in an A/A*.
          </p>
          <a
            className="btn-light"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            <span>Message on WhatsApp</span>
          </a>

          <div className="quick-message-chips">
            {chips.map((c) => {
              const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(c.msg)}`;
              return (
                <a
                  key={c.label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip-btn"
                >
                  💬 {c.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
