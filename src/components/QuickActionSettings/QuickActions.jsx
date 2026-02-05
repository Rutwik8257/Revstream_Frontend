import React, { useState } from "react";
import "./QuickActions.css";
import { NavLink } from "react-router-dom";
import Back from "../back/Back";
import image1 from "../../asserts/motion5.png.png";
export default function QuickActions() {
  const [tickets] = useState([
    {
      id: "#TS-2341",
      subject: "Payment issue",
      status: "Open",
      date: "2 min ago",
    },
    {
      id: "#TS-2342",
      subject: "Account verification",
      status: "In Progress",
      date: "1 day ago",
    },
    {
      id: "#TS-2343",
      subject: "Service delay",
      status: "Resolved",
      date: "3 days ago",
    },
  ]);

  const [faqs] = useState([
    {
      q: "How task execution works",
      a: "Task execution follows a simple workflow: assignment → progress updates → review → payment release.",
    },
    {
      q: "How reviews & approvals work",
      a: "Once work is submitted, clients review it and approve or request changes.",
    },
    {
      q: "How payments are processed",
      a: "Payments are processed securely and released after task approval.",
    },
    {
      q: "Security & data handling",
      a: "All sensitive data is encrypted and securely stored.",
    },
    {
      q: "Account & role management",
      a: "You can manage roles and permissions from account settings.",
    },
  ]);

  return (
    <div className="help-root">
      <main className="help-main">
        {/* HEADER */}

        <div className="help-header">
          <div>
            <h2>
              {" "}
              <Back /> &nbsp;Help & Support
            </h2>
            <p className="subtitle">
              Get help, manage tickets, and find answers
            </p>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="quick-actions">
          <div className="qa-card">
            <NavLink to="/app/DashboardLayout/raiseSupportTicket">
              Raise a Ticket
            </NavLink>
          </div>
          <div className="qa-card">
            <NavLink to="/app/DashboardLayout/concernRequest">
              Report a Security Concern
            </NavLink>
          </div>
          <div className="qa-card">
            <NavLink to="/app/DashboardLayout/paymentPayoutHelp">
              Payment & Payout Help
            </NavLink>
          </div>
        </div>

        {/* SUPPORT TICKETS */}
        <h3 className="section-title">Your Support Tickets</h3>
        <div className="ticket-table">
          {tickets.map((t, i) => (
            <div className="ticket-row" key={i}>
              <span>{t.id}</span>
              <span>{t.subject}</span>
              <span
                className={`status ${t.status.toLowerCase().replace(" ", "")}`}
              >
                {t.status}
              </span>
              <span>{t.date}</span>
            </div>
          ))}
        </div>

        {/* FAQ SECTION */}
        <h3 className="section-title">Frequently Asked Questions</h3>

        <div className="faq-layout">
          {/* LEFT */}
          <div className="faq-left">
            <img src={image1} alt="FAQ" className="faq-image" />

            <div className="faq-help-card">
              <h4>Still Have Questions?</h4>
              <p>
                Can't find the answer you’re looking for? Send us an email and
                we’ll get back to you.
              </p>
              <button
                className="faq-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = "mailto:support@jenizo.in";
                }}
              >
                Send Email
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="faq-right">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i}>
                <strong>{f.q}</strong>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="contact-box">
          <h4>Contact Information</h4>
          <p>Email: support@jenizo.com</p>
        </div>
      </main>
    </div>
  );
}
