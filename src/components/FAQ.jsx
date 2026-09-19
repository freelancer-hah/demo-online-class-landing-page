import { useState } from "react";

const faqs = [
  {
    q: "Where do the sessions take place?",
    a: "We offer both in-person one-to-one home visits across all DHA Phases (1–8) and Bahria Town Karachi, as well as ultra-interactive online sessions with high-resolution digital writing tablets and instant screen markup.",
  },
  {
    q: "What happens during the 20-minute Free Trial Class?",
    a: "We conduct a live diagnosis on an unattempted past-paper question. We observe the student's working in real-time, identify method breakdowns, and provide a clear 4-week roadmap with no financial obligation.",
  },
  {
    q: "How are parents kept updated on progress?",
    a: "Parents receive a weekly WhatsApp report detailing past-paper marks, specific topic improvements, and upcoming mock focus areas. Complete transparency at every step.",
  },
  {
    q: "Can we focus specifically on weak areas like Vectors, Matrices, or Trigonometry?",
    a: "Yes! Because all tuition is strictly one-on-one, we customize the schedule to target your child's highest-yield weak spots without wasting time on concepts they've already mastered.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our one-to-one CAIE Maths coaching.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={idx}>
                <button
                  type="button"
                  className="faq-button"
                  onClick={() => toggle(idx)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                {isOpen && <div className="faq-content">{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
