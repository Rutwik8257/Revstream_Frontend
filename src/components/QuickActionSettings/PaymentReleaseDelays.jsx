import React, { useState } from "react";
import "./PaymentReleaseDelays.css";
import Back from "../back/Back";

export default function PaymentReleaseDelays() {
  const [showPopup, setShowPopup] = useState(false);

  const [reasons] = useState([
    {
      title: "Work Under Review",
      desc: "Deliverables are being verified to meet project requirements before payment release",
      tag: "Critical for MNCs",
      icon: "📄",
    },
    {
      title: "Client Approval Pending",
      desc: "Awaiting client confirmation and sign-off on completed work",
      tag: "Required by Legal Teams",
      icon: "⏳",
    },
    {
      title: "Dispute Raised",
      desc: "Issues or concerns regarding deliverables are being investigated and resolved",
      tag: "Security Essential",
      icon: "⚠️",
    },
  ]);

  const [timelines] = useState([
    {
      title: "Standard Review",
      desc: "Normal processing time for work verification and client approval",
      time: "2–3 Business Days",
      icon: "✅",
    },
    {
      title: "Extended Review",
      desc: "For complex projects requiring additional verification or multi-stakeholder approval",
      time: "5–7 Business Days",
      icon: "🕒",
    },
    {
      title: "Dispute Resolution",
      desc: "Time required to investigate and resolve disputes between parties",
      time: "7–14 Business Days",
      icon: "🚨",
    },
  ]);

  return (
    <div className="release-root">
      {/* EMPTY SIDEBAR SPACE */}

      <main className="release-main">
        {/* HEADER */}
        <h2>
          {" "}
          <Back />
          &nbsp;Payment Release Delays
        </h2>
        <p className="subtitle">
          Understand common reasons and timelines for payment delays on the
          platform
        </p>

        <p className="notice">
          <strong>NEXSTREAM</strong> follows industry-standard payment
          processing practices to ensure security and compliance.
        </p>

        {/* COMMON REASONS */}
        <h3 className="section-title">Common Reasons for Delay</h3>

        <div className="reason-grid">
          {reasons.map((r, i) => (
            <div className="reason-card" key={i}>
              <div className="icon">{r.icon}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
              <span className="tag">{r.tag}</span>
            </div>
          ))}
        </div>

        {/* TIMELINES */}
        <h3 className="section-title">Expected Timelines</h3>

        <div className="timeline-box">
          {timelines.map((t, i) => (
            <div className="timeline-row" key={i}>
              <div className="left">
                <span className="circle">{t.icon}</span>
                <div>
                  <strong>{t.title}</strong>
                  <p>{t.desc}</p>
                </div>
              </div>
              <span className="time">{t.time}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-wrap">
          <button className="cta-btn" onClick={() => setShowPopup(true)}>
            Check Release Status →
          </button>
        </div>
      </main>

      {/* ================= RELEASE STATUS POPUP ================= */}
      {showPopup && (
        <div className="modal-overlay">
          <div className="status-modal">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              ×
            </button>

            <div className="status-header">
              <div className="status-icon">🕒</div>
              <div>
                <p className="small">Current Status</p>
                <h3>Under Review</h3>
              </div>
            </div>

            {/* PROGRESS TIMELINE */}
            <div className="progress-timeline">
              <div className="step done">
                <span>✔</span>
                <div>
                  <strong>Work Submitted</strong>
                  <p>Completed on January 15, 2026</p>
                </div>
              </div>

              <div className="step active">
                <span>⏳</span>
                <div>
                  <strong>Quality Review</strong>
                  <p>Currently being reviewed by QA Team</p>
                </div>
              </div>

              <div className="step">
                <span>○</span>
                <div>
                  <strong>Client Approval</strong>
                  <p>Pending review completion</p>
                </div>
              </div>

              <div className="step">
                <span>○</span>
                <div>
                  <strong>Payment Released</strong>
                  <p>Not yet released</p>
                </div>
              </div>
            </div>

            {/* PAYMENT DETAILS */}
            <div className="payment-box">
              <h4>Payment Details</h4>

              <div className="row">
                <span>Task ID</span>
                <strong>TSK-2024-001</strong>
              </div>

              <div className="row">
                <span>Amount</span>
                <strong className="green">$2,500.00</strong>
              </div>

              <div className="row">
                <span>Submitted Date</span>
                <strong>January 15, 2026</strong>
              </div>

              <div className="expected">
                📅 Expected Release Date: <strong>January 22–23, 2026</strong>
              </div>
            </div>

            <p className="note">
              Standard review typically takes 2–3 business days. You’ll receive
              a notification once the payment is approved and released.
            </p>

            <div className="modal-actions">
              <button className="secondary" onClick={() => setShowPopup(false)}>
                Close
              </button>
              <button className="primary">Contact Support</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
