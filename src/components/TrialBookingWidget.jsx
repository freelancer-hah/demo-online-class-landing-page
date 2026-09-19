import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_NUMBER } from "../config";

const gradesList = ["O-1 (Grade 9)", "O-2 (Grade 10)", "O-3 / Final Year (Grade 11)"];
const topicList = [
  "Algebra & Equations",
  "Trigonometry & 3D Bearings",
  "Vectors & Transformations",
  "Mensuration & Geometry",
  "Functions & Graphs",
  "Past Paper Exam Strategy",
];
const modesList = [
  "🏡 In-Person Home Visit (DHA / Bahria)",
  "💻 Online HD Live Tablet (1-on-1)",
];

export default function TrialBookingWidget() {
  const [selectedGrade, setSelectedGrade] = useState(gradesList[2]);
  const [selectedTopic, setSelectedTopic] = useState(topicList[0]);
  const [selectedMode, setSelectedMode] = useState(modesList[0]);

  const customMessage = `Hi Meridian Maths, I would like to book a 20-min Free Trial Class for ${selectedGrade}.
Target Topic: ${selectedTopic}
Preferred Mode: ${selectedMode}`;

  const bookingUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;

  return (
    <section className="booking-section" id="book-trial">
      <div className="container">
        <div className="booking-card">
          <div className="booking-header">
            <span className="section-tag" style={{ color: "var(--brass-light)" }}>
              Interactive Booking
            </span>
            <h2>Customize Your 20-Min Free Trial</h2>
            <p>Select your child's requirements to generate an instant trial session plan on WhatsApp.</p>
          </div>

          <div className="widget-grid">
            {/* Step 1: Grade Level */}
            <div className="widget-step">
              <label className="widget-label">1. Student Level</label>
              <div className="widget-options-row">
                {gradesList.map((grade) => (
                  <button
                    key={grade}
                    type="button"
                    className={`option-btn ${selectedGrade === grade ? "selected" : ""}`}
                    onClick={() => setSelectedGrade(grade)}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Focus Area */}
            <div className="widget-step">
              <label className="widget-label">2. Priority Weak Topic to Diagnose</label>
              <div className="widget-options-grid">
                {topicList.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    className={`option-btn ${selectedTopic === topic ? "selected" : ""}`}
                    onClick={() => setSelectedTopic(topic)}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Class Mode */}
            <div className="widget-step">
              <label className="widget-label">3. Preferred Learning Mode</label>
              <div className="widget-options-row">
                {modesList.map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    className={`option-btn ${selectedMode === mode ? "selected" : ""}`}
                    onClick={() => setSelectedMode(mode)}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="booking-action-box">
              <div className="action-info">
                <div className="action-tag">Ready to Schedule</div>
                <div className="action-summary">
                  {selectedGrade} · {selectedTopic}
                </div>
              </div>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-action"
              >
                <WhatsAppIcon />
                <span>Confirm &amp; Book via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
