import { useState } from "react";

const topics = [
  {
    id: "algebra",
    name: "Algebra & Quadratics",
    weight: "28% of Total Paper",
    difficulty: "High Yield",
    trap: "Students lose Method marks when completing the square or expanding algebraic fractions without factorizing.",
    solution: "Systematic step-template that guarantees all 4 method marks even on tricky multi-part questions.",
  },
  {
    id: "trig",
    name: "Trigonometry & 3D Bearings",
    weight: "18% of Total Paper",
    difficulty: "Challenging",
    trap: "Struggling to visualize 3D planes, angles of elevation/depression, and obtuse sine rules in Paper 2.",
    solution: "Visual 3D plane breakdown and instant angle-isolation rules that make questions intuitive.",
  },
  {
    id: "vectors",
    name: "Vectors & Transformations",
    weight: "16% of Total Paper",
    difficulty: "High Deduction Rate",
    trap: "Confusion between column vectors, position vectors, and finding matrix transformation inverses.",
    solution: "Visual diagram mapping and ratio rules that prevent algebraic vector miscalculations.",
  },
  {
    id: "mensuration",
    name: "Mensuration & Geometry",
    weight: "20% of Total Paper",
    difficulty: "Moderate",
    trap: "Forgetting arc length/sector area formulas in terms of π and scale factor volume ratios (k² vs k³).",
    solution: "Memory-proof derivation anchors and strict units checking before final accuracy calculations.",
  },
  {
    id: "stats",
    name: "Probability & Statistics",
    weight: "18% of Total Paper",
    difficulty: "Deceptive",
    trap: "Misinterpreting 'without replacement' tree diagrams and cumulative frequency median/interquartile ranges.",
    solution: "Standardized tree diagram tree-paths and ruler-exact cumulative frequency reading drills.",
  },
];

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState(topics[0].id);

  const activeTopic = topics.find((t) => t.id === activeTab) || topics[0];

  return (
    <section className="curriculum-section" id="curriculum">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Targeted Mastery</span>
          <h2>High-Yield CAIE Topic Mastery</h2>
          <p>We target the high-weightage topics where Cambridge examiners deduct the most marks.</p>
        </div>

        <div className="curriculum-tabs-wrapper">
          <div className="topic-tab-buttons">
            {topics.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`topic-tab-btn ${activeTab === t.id ? "active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                <span className="tab-name">{t.name}</span>
                <span className="tab-weight">{t.weight}</span>
              </button>
            ))}
          </div>

          <div className="topic-detail-card">
            <div className="detail-header">
              <div>
                <span className="difficulty-badge">{activeTopic.difficulty}</span>
                <h3>{activeTopic.name}</h3>
              </div>
              <div className="weight-badge">{activeTopic.weight}</div>
            </div>

            <div className="detail-body-grid">
              <div className="trap-box">
                <div className="box-title">
                  <span className="box-icon">⚠️</span>
                  <span>The Frequent Cambridge Trap</span>
                </div>
                <p>{activeTopic.trap}</p>
              </div>

              <div className="fix-box">
                <div className="box-title">
                  <span className="box-icon">⚡</span>
                  <span>The Meridian Solution</span>
                </div>
                <p>{activeTopic.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
