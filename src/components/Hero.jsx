import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "../config";

const stats = [
  { num: "82%", label: "Jumped at least 1 full grade within a single term" },
  { num: "11+ yrs", label: "Specialized strictly in CAIE O-Level Mathematics" },
  { num: "240+", label: "DHA & Bahria students coached to top Cambridge grades" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-layout">
          <div>
            <div className="eyebrow-badge">
              <span className="pulse-dot"></span>
              <span>Admissions Open · DHA &amp; Bahria (Oct/Nov &amp; May/June Series)</span>
            </div>

            <h1>
              Fix the gap before the <span className="highlight">next mock</span> does the damage.
            </h1>

            <p className="lead">
              One-to-one CAIE O-Level Maths tuition engineered around your child's actual
              working papers — not generic syllabus recaps.
            </p>

            <div className="cta-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon />
                <span>Book a Free Trial Class</span>
              </a>
              <div className="cta-note">
                <span>💬 20-min session · No card required · Immediate analysis</span>
              </div>
            </div>

            <div className="trust-badges">
              <div className="stars">★★★★★</div>
              <div className="trust-text">
                Rated <strong>4.9/5</strong> by over 180+ parents across DHA &amp; Bahria
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-header-badge">
              <span className="tag">Live Diagnostic Preview</span>
              <span className="session-type">20-Min Free Session</span>
            </div>

            <div className="sample-diagnosis-box">
              <div className="sample-diagnosis-title">
                <span>🎯 What Happens in Your Trial</span>
              </div>
              <p className="sample-diagnosis-desc">
                We pull an unattempted past-paper question, let your child solve it live, and pinpoint the exact sub-step where marks are lost.
              </p>
            </div>

            <div className="live-features-list">
              <div className="live-feature-item">
                <span className="feature-check">✓</span>
                <span>Direct CAIE Mark Scheme breakdown (Method vs Accuracy marks)</span>
              </div>
              <div className="live-feature-item">
                <span className="feature-check">✓</span>
                <span>Identification of hidden algebra &amp; trigonometric foundation gaps</span>
              </div>
              <div className="live-feature-item">
                <span className="feature-check">✓</span>
                <span>Personalized 4-week roadmap shared instantly on WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stat-row">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
