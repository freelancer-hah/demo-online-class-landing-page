import { useState } from "react";

export default function ScoreSimulator() {
  const [currentScore, setCurrentScore] = useState(48);

  // Calculate recovered marks based on current score
  const gap = 88 - currentScore;
  const methodMarks = Math.max(4, Math.round(gap * 0.42));
  const accuracyMarks = Math.max(4, Math.round(gap * 0.38));
  const examPacingMarks = Math.max(2, gap - methodMarks - accuracyMarks);
  const projectedScore = Math.min(96, currentScore + methodMarks + accuracyMarks + examPacingMarks);

  const getGrade = (score) => {
    if (score >= 85) return { grade: "A*", color: "#10B981" };
    if (score >= 70) return { grade: "A", color: "#3B82F6" };
    if (score >= 60) return { grade: "B", color: "#F59E0B" };
    if (score >= 50) return { grade: "C", color: "#EC4899" };
    return { grade: "D/U", color: "#EF4444" };
  };

  const currentGradeObj = getGrade(currentScore);
  const projectedGradeObj = getGrade(projectedScore);

  return (
    <section className="simulator-section">
      <div className="container">
        <div className="simulator-card">
          <div className="section-head" style={{ marginBottom: "32px" }}>
            <span className="section-tag">Interactive Simulator</span>
            <h2>Where Are Your Child's Marks Leaking?</h2>
            <p>Slide to your child's current mock mark and see the exact marks recovered through Meridian's paper diagnosis.</p>
          </div>

          <div className="slider-control-box">
            <div className="slider-header">
              <span className="slider-label">Current Mock Mark:</span>
              <span className="slider-value">
                <strong>{currentScore}</strong> / 100
                <span className="grade-pill-tag" style={{ background: currentGradeObj.color }}>
                  Grade {currentGradeObj.grade}
                </span>
              </span>
            </div>

            <input
              type="range"
              min="30"
              max="75"
              value={currentScore}
              onChange={(e) => setCurrentScore(Number(e.target.value))}
              className="score-range-slider"
            />
            <div className="slider-limits">
              <span>30 (Fail/D)</span>
              <span>50 (Average C)</span>
              <span>75 (Borderline A)</span>
            </div>
          </div>

          <div className="simulator-results-grid">
            <div className="recovery-breakdown-card">
              <h4>🎯 Marks Recovered Through Diagnostic Tutoring:</h4>
              <div className="recovery-item">
                <div className="recovery-label">
                  <strong>+ {methodMarks} Marks</strong>
                  <span>Method (M) Marks in Multi-Step Algebra &amp; Geometry</span>
                </div>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: `${(methodMarks / 25) * 100}%` }}></div>
                </div>
              </div>

              <div className="recovery-item">
                <div className="recovery-label">
                  <strong>+ {accuracyMarks} Marks</strong>
                  <span>Accuracy (A) Marks by fixing sign &amp; calculator precision errors</span>
                </div>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: `${(accuracyMarks / 25) * 100}%` }}></div>
                </div>
              </div>

              <div className="recovery-item">
                <div className="recovery-label">
                  <strong>+ {examPacingMarks} Marks</strong>
                  <span>Speed &amp; Exam Time-Management on Paper 2 Section B</span>
                </div>
                <div className="mini-bar">
                  <div className="mini-fill" style={{ width: `${(examPacingMarks / 20) * 100}%` }}></div>
                </div>
              </div>
            </div>

            <div className="projected-score-card">
              <div className="projected-badge">Projected Cambridge Final</div>
              <div className="projected-numbers">
                <span className="projected-val">{projectedScore}</span>
                <span className="projected-max">/ 100</span>
              </div>
              <div
                className="projected-grade"
                style={{ color: projectedGradeObj.color, borderColor: projectedGradeObj.color }}
              >
                Target: Grade {projectedGradeObj.grade}
              </div>
              <p className="projected-note">
                Achieved consistently across 240+ DHA &amp; Bahria students in 6 to 10 weeks of structured coaching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
