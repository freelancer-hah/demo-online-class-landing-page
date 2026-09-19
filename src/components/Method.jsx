const steps = [
  {
    num: "01",
    time: "Week 1",
    icon: "🔍",
    title: "Live Paper Diagnosis",
    body: "We conduct a live unscripted past-paper audit to isolate the exact topics and question types where working marks are leaking — eliminating guesswork.",
    highlight: "Pinpoints root conceptual leaks",
  },
  {
    num: "02",
    time: "Week 2 – 3",
    icon: "⚙️",
    title: "Targeted Concept Rebuild",
    body: "We rebuild every shaky step, revisiting fundamental algebra, vector geometries, or trigonometry rules. No rushing ahead on fragile foundations.",
    highlight: "Zero weak foundational gaps",
  },
  {
    num: "03",
    time: "Week 4 & Beyond",
    icon: "⏱️",
    title: "Timed Exam-Condition Drills",
    body: "Weekly full past papers under strict Cambridge timed conditions. Marked strictly against official CAIE schemes so exam pressure becomes routine.",
    highlight: "100% CAIE mark scheme mastery",
  },
];

export default function Method() {
  return (
    <section className="method" id="method">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Structured Roadmap</span>
          <h2>How the First Three Weeks Unfold</h2>
          <p>A proven step-by-step structure for every student, calibrated to their specific paper flaws.</p>
        </div>

        <div className="steps-grid">
          {steps.map((s) => (
            <div className="step-box" key={s.num}>
              <div className="step-top">
                <span className="step-number">{s.num}</span>
                <span className="step-time-pill">{s.time}</span>
              </div>
              <div className="step-icon-wrapper">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="step-highlight-tag">
                <span>✦</span> {s.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
