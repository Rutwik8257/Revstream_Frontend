import React, { useEffect, useState } from "react";
import "./SuperAdminDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { concenData, raiseTicketData } from "../redux/thunk/supportThunk";

export default function SuperAdminDashboard() {
  const [range, setRange] = useState("Last 30 days");

  const stats = [
    { title: "Total Companies Registered", value: "0", change: "+12.5%" },
    { title: "Active Tasks", value: "0", change: "+8.2%" },
    { title: "Payments Pending", value: "0", change: "-15.3%" },
    { title: "Tasks Under Review", value: "0", change: "-3.1%" },
    { title: "Disputes Count", value: "0", change: "-2.4%" },
  ];

  const activities = [
    {
      company: "TechCorp Solutions",
      activity: "New task created",
      status: "Active",
      amount: "$0",
      time: "2 min ago",
    },
    {
      company: "Digital Ventures Inc",
      activity: "Payment processed",
      status: "Completed",
      amount: "$0",
      time: "15 min ago",
    },
    {
      company: "Innovation Labs",
      activity: "Task under review",
      status: "Pending",
      amount: "$0",
      time: "1 hour ago",
    },
    {
      company: "Cloud Systems Ltd",
      activity: "Dispute raised",
      status: "Urgent",
      amount: "$0",
      time: "2 hours ago",
    },
  ];

  /* ================= SUPPORT TICKET POPUP ================= */
  const [showTicketPopup, setShowTicketPopup] = useState(false);

  const [ticket, setTicket] = useState({
    category: "",
    priority: "",
    subject: "",
    description: "",
  });

  /* ================= SECURITY REPORT POPUP ================= */
  const [showSecurityPopup, setShowSecurityPopup] = useState(false);

  const [securityReport, setSecurityReport] = useState({
    issueType: "",
    severity: "",
    affectedArea: "",
    description: "",
  });

  /* ================= PAYMENT & PAYOUT HELP POPUP ================= */
  const [showPaymentHelp, setShowPaymentHelp] = useState(false);

  /* ================= PLATFORM USAGE GUIDE POPUP ================= */
  const [showUsageGuide, setShowUsageGuide] = useState(false);

  let raiseTicket = useSelector((state) => state.support.raiseTicketData);
  console.log("Support Ticket Data:", raiseTicket);
  let concenTickets = useSelector((state) => state.support.concenData);
  console.log("Concerns Data:", concenTickets);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(raiseTicketData());
    dispatch(concenData());
  }, []);

  let buttonStyle = {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    backgroundColor: "#4f46e5",
    color: "white",
    transition: "background-color 0.3s ease",
    marginTop: "10px",
  };

  return (
    <div className="sad-root">
      {/* MAIN CONTENT */}
      <div className="sad-container">
        {/* HEADER */}
        <div className="sad-header">
          <h1>Super Admin Dashboard</h1>
        </div>

        {/* STATS GRID */}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <p>{s.title}</p>
              <h2>{s.value}</h2>
            </div>
          ))}
        </div>
      </div>
      <h1>Support Tickets And Concens</h1>
      <div className="raiseticketWrapper">
        {raiseTicket?.map((task) => (
          <div className="raiseticketCard" key={task.id}>
            <div className="raiseticketHeader">
              <h3 className="raiseticketTitle">{task.shortDesc}</h3>
              <span
                className={`raiseticketStatus ${task.status === "OPEN" ? "raiseticketStatusOpen" : "raiseticketStatusClosed"}`}
              >
                {task.status}
              </span>
            </div>

            <div className="raiseticketBody">
              <p className="raiseticketRow">
                <span className="raiseticketLabel">Task ID:</span>
                <span className="raiseticketValue">{task.taskId}</span>
              </p>

              <p className="raiseticketRow">
                <span className="raiseticketLabel">Category:</span>
                <span className="raiseticketValue">{task.category}</span>
              </p>

              <p className="raiseticketRow">
                <span className="raiseticketLabel">Details:</span>
                <span className="raiseticketValue">{task.details}</span>
              </p>

              <p className="raiseticketRow">
                <span className="raiseticketLabel">Created At:</span>
                <span className="raiseticketValue">
                  {new Date(task.createdAt).toLocaleString()}
                </span>
              </p>
            </div>

            {task.attachmentUrl && (
              <div className="raiseticketFooter">
                <a
                  className="raiseticketAttachmentLink"
                  href={task.attachmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Attachment
                </a>
              </div>
            )}

            <button style={buttonStyle}>Reslove</button>
          </div>
        ))}
        {concenTickets?.map((item) => (
          <div className="raiseticketIncidentCard" key={item.id}>
            <div className="raiseticketIncidentHeader">
              <h3 className="raiseticketIncidentTitle">
                {item.category} Incident
              </h3>
              <span
                className={`raiseticketIncidentSeverity raiseticketSeverity${item.severity}`}
              >
                {item.severity}
              </span>
            </div>

            <div className="raiseticketIncidentBody">
              <p className="raiseticketIncidentRow">
                <span className="raiseticketIncidentLabel">Contact Email:</span>
                <span className="raiseticketIncidentValue">
                  {item.contactEmail}
                </span>
              </p>

              <p className="raiseticketIncidentRow">
                <span className="raiseticketIncidentLabel">Incident Date:</span>
                <span className="raiseticketIncidentValue">
                  {item.incidentDate}
                </span>
              </p>

              <p className="raiseticketIncidentRow">
                <span className="raiseticketIncidentLabel">Incident Time:</span>
                <span className="raiseticketIncidentValue">
                  {item.incidentTime}
                </span>
              </p>

              <p className="raiseticketIncidentRow">
                <span className="raiseticketIncidentLabel">Description:</span>
                <span className="raiseticketIncidentValue">
                  {item.description}
                </span>
              </p>

              <div className="raiseticketAffectedAreaBox">
                <span className="raiseticketIncidentLabel">
                  Affected Areas:
                </span>
                <div className="raiseticketAffectedList">
                  {item.affectedAreas.map((area, index) => (
                    <span key={index} className="raiseticketAffectedTag">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <p className="raiseticketIncidentRow">
                <span className="raiseticketIncidentLabel">Created At:</span>
                <span className="raiseticketIncidentValue">
                  {new Date(item.createdAt).toLocaleString()}
                </span>
              </p>
            </div>
            <button style={buttonStyle}>Reslove</button>
          </div>
        ))}
      </div>

      {/* ================= RAISE SUPPORT TICKET POPUP ================= */}
      {showTicketPopup && (
        <div className="modal-overlay">
          <div className="support-ticket-modal">
            <div className="modal-header">
              <h3>Raise a Support Ticket</h3>
              <span className="close" onClick={() => setShowTicketPopup(false)}>
                ✕
              </span>
            </div>

            <p className="modal-subtitle">
              For issues related to tasks, payments, or access
            </p>

            <label>Category</label>
            <input
              type="text"
              value={ticket.category}
              onChange={(e) =>
                setTicket({ ...ticket, category: e.target.value })
              }
            />

            <label>Priority</label>
            <input
              type="text"
              value={ticket.priority}
              onChange={(e) =>
                setTicket({ ...ticket, priority: e.target.value })
              }
            />

            <label>Subject</label>
            <input
              type="text"
              placeholder="Brief description of the issue"
              value={ticket.subject}
              onChange={(e) =>
                setTicket({ ...ticket, subject: e.target.value })
              }
            />

            <label>Description</label>
            <textarea
              placeholder="Provide detailed information about your issue..."
              value={ticket.description}
              onChange={(e) =>
                setTicket({ ...ticket, description: e.target.value })
              }
            />

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() => setShowTicketPopup(false)}
              >
                Cancel
              </button>
              <button className="primary-btn">Submit Ticket</button>
            </div>
          </div>
        </div>
      )}
      {/* ================= RAISE SUPPORT TICKET POPUP ================= */}
      {showTicketPopup && (
        <div className="modal-overlay">
          <div className="support-ticket-modal">
            <div className="modal-header">
              <h3>Raise a Support Ticket</h3>
              <span className="close" onClick={() => setShowTicketPopup(false)}>
                ✕
              </span>
            </div>

            <p className="modal-subtitle">
              For issues related to tasks, payments, or access
            </p>

            <label>Category</label>
            <input
              type="text"
              value={ticket.category}
              onChange={(e) =>
                setTicket({ ...ticket, category: e.target.value })
              }
            />

            <label>Priority</label>
            <input
              type="text"
              value={ticket.priority}
              onChange={(e) =>
                setTicket({ ...ticket, priority: e.target.value })
              }
            />

            <label>Subject</label>
            <input
              type="text"
              placeholder="Brief description of the issue"
              value={ticket.subject}
              onChange={(e) =>
                setTicket({ ...ticket, subject: e.target.value })
              }
            />

            <label>Description</label>
            <textarea
              placeholder="Provide detailed information about your issue..."
              value={ticket.description}
              onChange={(e) =>
                setTicket({ ...ticket, description: e.target.value })
              }
            />

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() => setShowTicketPopup(false)}
              >
                Cancel
              </button>
              <button className="primary-btn">Submit Ticket</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= REPORT SECURITY POPUP ================= */}
      {showSecurityPopup && (
        <div className="modal-overlay">
          <div className="security-modal">
            <div className="modal-header">
              <h3>Report a Security Concern</h3>
              <span
                className="close"
                onClick={() => setShowSecurityPopup(false)}
              >
                ✕
              </span>
            </div>

            <p className="modal-subtitle">
              For data, access, or compliance-related issues
            </p>

            <label>Issue Type</label>
            <input
              type="text"
              value={securityReport.issueType}
              onChange={(e) =>
                setSecurityReport({
                  ...securityReport,
                  issueType: e.target.value,
                })
              }
            />

            <label>Severity Level</label>
            <input
              type="text"
              value={securityReport.severity}
              onChange={(e) =>
                setSecurityReport({
                  ...securityReport,
                  severity: e.target.value,
                })
              }
            />

            <label>Affected Area</label>
            <input
              type="text"
              placeholder="Which system or area is affected?"
              value={securityReport.affectedArea}
              onChange={(e) =>
                setSecurityReport({
                  ...securityReport,
                  affectedArea: e.target.value,
                })
              }
            />

            <label>Detailed Description</label>
            <textarea
              placeholder="Provide as much detail as possible about the security concern..."
              value={securityReport.description}
              onChange={(e) =>
                setSecurityReport({
                  ...securityReport,
                  description: e.target.value,
                })
              }
            />

            <div className="security-warning">
              🚨 Security reports are treated with highest priority. Our
              security team will be notified immediately.
            </div>

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() => setShowSecurityPopup(false)}
              >
                Cancel
              </button>
              <button className="danger-btn">Submit Report</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= PAYMENT & PAYOUT HELP POPUP ================= */}
      {showPaymentHelp && (
        <div className="modal-overlay">
          <div className="payment-help-modal">
            <div className="modal-header">
              <h3>Payment & Payout Help</h3>
              <span className="close" onClick={() => setShowPaymentHelp(false)}>
                ✕
              </span>
            </div>

            <p className="modal-subtitle">
              Escrow, releases, delays, or invoice clarification
            </p>

            <div className="help-grid">
              <div className="help-card">
                <div className="help-icon green">💵</div>
                <strong>Escrow & Payment Release</strong>
                <p>Learn how escrow works and when payments are released</p>
              </div>

              <div className="help-card">
                <div className="help-icon orange">⏱</div>
                <strong>Payment Delays</strong>
                <p>
                  Understand common reasons for payment delays and how to
                  resolve them
                </p>
              </div>

              <div className="help-card">
                <div className="help-icon blue">📄</div>
                <strong>Invoice Management</strong>
                <p>
                  Download, review, and manage your invoices and payment history
                </p>
              </div>

              <div className="help-card">
                <div className="help-icon purple">❓</div>
                <strong>FAQ & Support</strong>
                <p>Get answers to frequently asked questions about payments</p>
              </div>
            </div>

            <div className="payment-summary">
              <div>
                <span>Pending</span>
                <strong>$48,320</strong>
              </div>
              <div>
                <span>In Escrow</span>
                <strong>$122,450</strong>
              </div>
              <div>
                <span>Released</span>
                <strong>$892,100</strong>
              </div>
            </div>

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() => setShowPaymentHelp(false)}
              >
                Close
              </button>
              <button className="success-btn">
                Chat with Payment Specialist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= PLATFORM USAGE GUIDE POPUP ================= */}
      {showUsageGuide && (
        <div className="modal-overlay">
          <div className="usage-guide-modal">
            <div className="modal-header">
              <h3>Platform Usage Guide</h3>
              <span className="close" onClick={() => setShowUsageGuide(false)}>
                ✕
              </span>
            </div>

            <p className="modal-subtitle">
              Understand workflows and best practices
            </p>

            <div className="guide-grid">
              <div className="guide-card">
                <div className="guide-icon blue">📘</div>
                <strong>Getting Started Guide</strong>
                <p>Complete onboarding tutorial for new admins</p>
                <div className="guide-links">
                  <span>Account Setup →</span>
                  <span>Dashboard Overview →</span>
                  <span>First Steps →</span>
                </div>
              </div>

              <div className="guide-card">
                <div className="guide-icon purple">🎥</div>
                <strong>Video Tutorials</strong>
                <p>Watch step-by-step video guides</p>
                <div className="guide-links">
                  <span>Task Management →</span>
                  <span>Payment Processing →</span>
                  <span>User Administration →</span>
                </div>
              </div>

              <div className="guide-card">
                <div className="guide-icon green">📄</div>
                <strong>Documentation</strong>
                <p>Detailed documentation and API references</p>
                <div className="guide-links">
                  <span>Admin API →</span>
                  <span>Workflow Automation →</span>
                  <span>Reporting Tools →</span>
                </div>
              </div>

              <div className="guide-card">
                <div className="guide-icon orange">👥</div>
                <strong>Best Practices</strong>
                <p>Learn from experienced platform administrators</p>
                <div className="guide-links">
                  <span>Security Tips →</span>
                  <span>Efficiency Hacks →</span>
                  <span>Common Pitfalls →</span>
                </div>
              </div>
            </div>

            <div className="quick-links">
              <span>Keyboard Shortcuts</span>
              <span>System Status</span>
              <span>Release Notes</span>
              <span>Community Forum</span>
            </div>

            <label className="search-label">Search Documentation</label>
            <input
              className="search-input"
              placeholder="Search for topics, features, or guides..."
            />

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() => setShowUsageGuide(false)}
              >
                Close
              </button>
              <button className="primary-btn">Download PDF Guide</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
