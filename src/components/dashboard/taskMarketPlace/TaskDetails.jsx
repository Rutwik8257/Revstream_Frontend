import React, { useState } from "react";
import "./TaskDetails.css";

export default function TaskDetails() {
  const [receiverMode, setReceiverMode] = useState(true);
  const [question, setQuestion] = useState("");

  const handleSubmitQuestion = () => {
    if (!question.trim()) {
      alert("Please enter your question");
      return;
    }
    console.log("Question submitted:", question);
    setQuestion("");
  };

  const handleTaskSubmit = () => {
    alert("Task submitted successfully");
  };

  return (
    <div className="task-root">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h3 className="logo">Logo</h3>

        <div className="receiver">
          <div>
            <strong>Receiver Mode</strong>
            <p>Accepting external work</p>
          </div>
          <input
            type="checkbox"
            checked={receiverMode}
            onChange={() => setReceiverMode(!receiverMode)}
          />
        </div>

        <nav>
          <a className="active">Dashboard</a>
          <a>Task Market Place</a>
          <a>Internal Task board</a>
          <a>Add New Task</a>
          <a>Live Earnings</a>
          <a>Insights</a>
          <a>Payments</a>
          <a>Settings</a>
          <a>Help & Supports</a>
          <a>My Wallet</a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="content">
        <div className="details-card">
          <p className="back">‹ Task Details</p>

          <h2>
            Dashboard Redesign <span className="price">($1,200)</span>
          </h2>

          <div className="skills">
            <span>Figma</span>
            <span>UI/UX</span>
            <span>Prototyping</span>
            <span>A/B Testing</span>
          </div>

          <section>
            <h4>Primary Objective</h4>
            <p>
              Develop an interactive, real-time dashboard to consolidate,
              visualize, and monitor key performance indicators (KPIs),
              operational metrics, and business intelligence data from multiple
              data sources into a single-pane-of-glass view.
            </p>
          </section>

          <section>
            <h4>Skills & Tools:</h4>
            <ul>
              <li>Proficiency is essential in Figma.</li>
              <li>
                Strong working knowledge of Adobe Creative Suite (Photoshop,
                Illustrator, After Effects).
              </li>
              <li>
                Basic understanding of HTML/CSS constraints (you don’t need to
                code, but you need to know how developers build what you design).
              </li>
              <li>
                Familiarity with After Effects or interaction design tools is a
                plus.
              </li>
            </ul>
          </section>

          <section>
            <h4>Deliverables</h4>
            <ul>
              <li>Technical design document</li>
              <li>API documentation</li>
              <li>User manual and training materials</li>
              <li>Deployment and maintenance guides</li>
            </ul>
          </section>

          <section>
            <h4>Attachments</h4>
          </section>

          <div className="footer-actions">
            <button className="ghost">Mark as Complete</button>
            <button className="primary" onClick={handleTaskSubmit}>
              Submit
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <aside className="right-panel">
          <div className="info-card">
            <h4>⏳ Time & Deadline</h4>
            <p>Estimated Time</p>
            <strong>2 - 3 weeks</strong>
            <p className="mt">Deadline</p>
            <strong>Mon, Jan 25, 2026</strong>
          </div>

          <div className="info-card note">
            <h4>Note</h4>
            <p>
              Please review all task details before accepting and also check for
              schedule conflicts with your existing commitments
            </p>
          </div>

          <div className="info-card">
            <h4>Ask Questions</h4>
            <textarea
              placeholder="Enter your Queries Here!"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button className="primary full" onClick={handleSubmitQuestion}>
              Submit
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
