import { useState } from "react";

const grades = [
  { tag: "A*", pct: 38 },
  { tag: "A", pct: 41 },
  { tag: "B", pct: 16 },
  { tag: "C", pct: 5 },
];

const roadmaps = {
  D: {
    target: "Target: A / A*",
    timeline: "8 – 10 Weeks",
    focus: "Phase 1 focuses on recovering 25+ lost Method marks in Paper 1 Algebra & Mensuration before advancing to Paper 2 multi-part questions.",
  },
  C: {
    target: "Target: A*",
    timeline: "6 – 8 Weeks",
    focus: "Focus shifts to eliminating careless sign errors and mastering high-yield topics like Vector Geometry, Functions, and Statistics.",
  },
  B: {
    target: "Target: High A*",
    timeline: "4 – 6 Weeks",
    focus: "Precision time-management and advanced Paper 2 problem-solving to consistently score above 88/100 under timed pressure.",
  },
};

const testimonials = [
  {
    quote: "Hamza was stuck at a D in his October mocks. After two months with Meridian's paper diagnosis, he secured an A in his Cambridge finals.",
    parent: "Mrs. Tariq (DHA Phase 6)",
    grade: "D ➔ A Final",
  },
  {
    quote: "The personalized focus on CAIE mark schemes made all the difference. My daughter finally knew where she was giving away marks.",
    parent: "Dr. Asad (Bahria Town)",
    grade: "C ➔ A* Final",
  },
];

export default function Results() {
  const [selectedGrade, setSelectedGrade] = useState("D");

  return (
    <section className="results" id="results">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Proven Track Record</span>
          <h2>Where Students Land After One Term</h2>
          <p>Grade distribution and performance leap across Meridian students over recent CAIE cycles.</p>
        </div>

        <div className="results-grid">
          {/* Grade Distribution Chart */}
          <div className="grade-chart-wrapper">
            <h3>CAIE Grade Distribution</h3>
            <p className="grade-chart-subtitle">Recent exam cycle breakdown (95% scoring B or higher)</p>
            <div className="grade-chart">
              {grades.map((g) => (
                <div className="grade-row" key={g.tag}>
                  <div className="grade-tag">{g.tag}</div>
                  <div className="grade-track">
                    <div className="grade-fill" style={{ width: `${g.pct}%` }} />
                  </div>
                  <div className="grade-pct">{g.pct}%</div>
                </div>
              ))}
            </div>
            <p className="results-note">
              Based on students enrolled for a minimum 8-week diagnostic &amp; drill cycle.
            </p>
          </div>

          {/* Interactive Grade Roadmap Explorer */}
          <div className="roadmap-card">
            <h3>Interactive Roadmap Estimator</h3>
            <p className="desc">Select your child's current mock grade to see their target path:</p>

            <div className="grade-selector-label">Current Mock Grade</div>
            <div className="grade-pill-group">
              {["D", "C", "B"].map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`grade-select-btn ${selectedGrade === g ? "active" : ""}`}
                  onClick={() => setSelectedGrade(g)}
                >
                  Grade {g}
                </button>
              ))}
            </div>

            <div className="roadmap-display-box">
              <div className="roadmap-timeline-title">
                {roadmaps[selectedGrade].target} · Approx. {roadmaps[selectedGrade].timeline}
              </div>
              <p className="roadmap-timeline-text">
                {roadmaps[selectedGrade].focus}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-row">
          {testimonials.map((t, idx) => (
            <div className="quote-card" key={idx}>
              <p className="quote-text">"{t.quote}"</p>
              <div className="quote-author">
                <div className="author-info">
                  <strong>{t.parent}</strong>
                  <span>Verified Parent</span>
                </div>
                <div className="grade-badge-won">{t.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
