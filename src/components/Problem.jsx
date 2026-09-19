export default function Problem() {
  return (
    <section className="problem" id="why-us">
      <div className="container">
        <div className="problem-header">
          <span className="section-eyebrow">The Core Problem</span>
          <h2>Most students don't lose marks because maths is "hard"</h2>
        </div>

        <div className="comparison-grid">
          <div className="compare-card flawed">
            <div className="compare-badge">❌ The Conventional Trap</div>
            <h3>Generic Tuition &amp; Blind Practice</h3>
            <ul className="compare-list">
              <li>
                <span className="icon-cross">✕</span>
                <span>Solving 50 past papers without understanding *why* marks were deducted in the marking scheme.</span>
              </li>
              <li>
                <span className="icon-cross">✕</span>
                <span>Big group academies where quiet students get left behind with unasked doubts.</span>
              </li>
              <li>
                <span className="icon-cross">✕</span>
                <span>Rushing through the syllabus while shaky foundation steps in Algebra and Trigonometry remain broken.</span>
              </li>
            </ul>
          </div>

          <div className="compare-card meridian">
            <div className="compare-badge">✓ The Meridian Fix</div>
            <h3>Root-Cause Diagnostic Coaching</h3>
            <ul className="compare-list">
              <li>
                <span className="icon-check">✓</span>
                <span><strong>Step Breakdown Analysis:</strong> We isolate exactly where the working falls apart — Method (M) marks vs Accuracy (A) marks.</span>
              </li>
              <li>
                <span className="icon-check">✓</span>
                <span><strong>1-on-1 Personal Attention:</strong> Every single class adapts to your child's pace, error log, and specific paper mistakes.</span>
              </li>
              <li>
                <span className="icon-check">✓</span>
                <span><strong>Cambridge Examiner Rigor:</strong> Timed past-paper drills that simulate real examination pressure from Week 4 onwards.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
