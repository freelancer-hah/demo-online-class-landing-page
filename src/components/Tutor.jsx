const credentials = [
  "🎓 MSc in Mathematics",
  "📜 Official CAIE Scheme Specialist",
  "🏡 DHA & Bahria Town (In-Person & Online)",
  "⏱️ 1-on-1 Custom Pace",
];

export default function Tutor() {
  return (
    <section className="tutor" id="tutor">
      <div className="container">
        <div className="section-head">
          <span className="section-tag" style={{ color: "var(--brass-light)" }}>
            Academic Leadership
          </span>
          <h2 style={{ color: "var(--paper)" }}>Who Is Mentoring Your Child</h2>
        </div>

        <div className="tutor-card">
          <div className="avatar-wrapper">
            <div className="avatar">SF</div>
            <div className="verified-icon" title="Verified CAIE Specialist">✓</div>
          </div>

          <div>
            <div className="tutor-header-title">
              <h3 className="tutor-name">Sana Farooq</h3>
              <span className="experience-tag">11+ Years CAIE Experience</span>
            </div>

            <p className="tutor-role">
              Senior O-Level Mathematics Specialist &amp; Cambridge Exam Coach
            </p>

            <p className="tutor-bio">
              Over eleven years exclusively mentoring students for CAIE O-Level Maths (Syllabus D 4024).
              Sessions are engineered around the student’s actual exam scripts — training them on how Cambridge examiners assign Method (M), Accuracy (A), and Independent (B) marks.
            </p>

            <ul className="credentials">
              {credentials.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
