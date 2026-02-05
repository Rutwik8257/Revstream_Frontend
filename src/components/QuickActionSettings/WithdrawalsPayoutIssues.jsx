import React, { useState } from "react";
import "./WithdrawalsPayoutIssues.css";
import Back from "./../back/Back";

export default function WithdrawalsPayoutIssues() {
  const [issues] = useState([
    {
      title: "Withdrawal Processing Time",
      desc: "Standard processing takes 3–5 business days depending on your payment method",
      tag: "Typical Timeline",
      icon: "⏱️",
      color: "blue",
    },
    {
      title: "Failed or Pending Withdrawals",
      desc: "Withdrawals may fail due to incorrect account details or insufficient verification",
      tag: "Action Required",
      icon: "⚠️",
      color: "orange",
    },
    {
      title: "Bank/Card Verification Issues",
      desc: "Ensure your payment method is verified and up-to-date to avoid delays",
      tag: "Security Essential",
      icon: "🔒",
      color: "green",
    },
  ]);

  const [timelines] = useState([
    {
      title: "Bank Transfer",
      desc: "Standard processing time for bank account withdrawals",
      time: "3–5 Business Days",
      icon: "✔️",
    },
    {
      title: "Digital Wallet",
      desc: "Faster processing for verified digital wallet accounts",
      time: "1–2 Business Days",
      icon: "⚡",
    },
    {
      title: "Under Review",
      desc: "Additional time required for verification or dispute resolution",
      time: "5–10 Business Days",
      icon: "🕵️",
    },
  ]);

  return (
    <div className="wp-root">
      <main className="wp-main">
        {/* HEADER */}
        <h2>
          <Back />
          &nbsp;Withdrawals & Payout Issues
        </h2>
        <p className="subtitle">
          Common issues and solutions for withdrawal processing and payouts
        </p>

        <p className="notice">
          <strong>REVSTREAM</strong> ensures secure and timely withdrawals with
          industry-standard verification processes.
        </p>

        {/* COMMON ISSUES */}
        <h3 className="section-title">Common Issues</h3>

        <div className="issue-grid">
          {issues.map((i, idx) => (
            <div className={`issue-card ${i.color}`} key={idx}>
              <div className="issue-icon">{i.icon}</div>
              <h4>{i.title}</h4>
              <p>{i.desc}</p>
              <span className="issue-tag">{i.tag}</span>
            </div>
          ))}
        </div>

        {/* PROCESSING TIMELINES */}
        <h3 className="section-title">Processing Timelines</h3>

        <div className="timeline-box">
          {timelines.map((t, idx) => (
            <div className="timeline-row" key={idx}>
              <div className="timeline-left">
                <span className="timeline-icon">{t.icon}</span>
                <div>
                  <strong>{t.title}</strong>
                  <p>{t.desc}</p>
                </div>
              </div>
              <span className="timeline-time">{t.time}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-wrap">
          <button className="cta-btn">View Withdrawal History →</button>
        </div>
      </main>
    </div>
  );
}
