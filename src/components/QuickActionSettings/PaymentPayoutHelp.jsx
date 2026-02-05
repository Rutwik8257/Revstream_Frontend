import React, { useState } from "react";
import "./PaymentPayoutHelp.css";
import { NavLink } from "react-router-dom";
import Back from "../back/Back";

export default function PaymentPayoutHelp() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    "Why is my payment still locked?",
    "When will my money be released?",
    "Why was my withdrawal rejected?",
    "How is the platform fee calculated?",
  ];

  const toggleFaq = (i) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  return (
    <div className="pph-root">
      <main className="pph-main">
        <h2>
          <Back /> &nbsp;Payment & Payout Help
        </h2>
        <p className="subtitle">
          Escrow, release, delays, or invoice clarification
        </p>

        {/* ================= CARDS ================= */}
        <div className="card-grid">
          <div className="help-card blue">
            <h4>Escrow & Payment Safety</h4>
            <ul>
              <li>How escrow works</li>
              <li>When funds are locked</li>
              <li>Conditions for release</li>
              <li>Your payment is safe</li>
            </ul>
            <button className="escrow-button">
              <NavLink to="/app/DashboardLayout/escrow-payment-safety">
                Learn More
              </NavLink>
            </button>
          </div>

          <div className="help-card orange">
            <h4>Payment Release Delays</h4>
            <ul>
              <li>Common reasons</li>
              <li>Client approval delays</li>
              <li>Dispute raised</li>
              <li>Expected timelines</li>
            </ul>
            <button>
              <NavLink to="/app/DashboardLayout/check-release-status">
                Check Release Status
              </NavLink>
            </button>
          </div>

          <div className="help-card green">
            <h4>Withdrawals & Payout Issues</h4>
            <ul>
              <li>Withdrawal processing time</li>
              <li>Bank or card issues</li>
              <li>Verification failures</li>
            </ul>
            <button>
              <NavLink to="/app/DashboardLayout/withdrawals-payout-issues">
                View Withdraw History
              </NavLink>
            </button>
          </div>

          <div className="help-card purple">
            <h4>Invoices & Fees</h4>
            <ul>
              <li>Platform fee (15%)</li>
              <li>Invoice generation</li>
              <li>Download receipts</li>
              <li>Tax/GST invoice basics</li>
            </ul>
            <button>View Invoices</button>
          </div>
        </div>

        {/* ================= FAQ ================= */}
        <h4 className="faq-title">Quick Help / FAQs</h4>

        <div className="faq-box">
          {faqs.map((q, i) => (
            <div key={i} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(i)}>
                <span>{q}</span>
                <span>{openFaq === i ? "−" : "+"}</span>
              </div>

              {openFaq === i && (
                <div className="faq-answer">
                  This information explains the selected payment concern in
                  detail based on platform rules.
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ================= TRUST NOTE ================= */}
        <div className="trust-note">
          🔒 Trust & Safety — All payments are protected through escrow. Our
          finance team resolves payout issues within 24–48 hours.
        </div>
      </main>
    </div>
  );
}
