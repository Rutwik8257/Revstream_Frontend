import React, { useState } from "react";
import "./WithdrawalHistory.css";

export default function WithdrawalHistory() {
  const [activeTab, setActiveTab] = useState("total");

  const summary = {
    total: 20000,
    processing: 20000,
    completed: 20000,
    failed: 20000,
  };

  const withdrawals = [
    {
      amount: "₹ 20,000",
      card: "Visa ••••4532",
      date: "Jan 15, 2026",
      txn: "123456",
      arrival: "Jan 18, 2026",
      status: "Processing",
    },
    {
      amount: "₹ 20,000",
      card: "Visa ••••4532",
      date: "Jan 15, 2026",
      txn: "123456",
      arrival: "Jan 18, 2026",
      status: "Released",
    },
    {
      amount: "₹ 20,000",
      card: "Visa ••••4532",
      date: "Jan 15, 2026",
      txn: "123456",
      arrival: "Jan 18, 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="history-root">
      {/* EMPTY SIDEBAR SPACE */}
      <div className="sidebar-spacer" />

      <main className="main">
        {/* HEADER */}
        <div className="header">
          <div>
            <h2>Withdrawal History</h2>
            <p className="subtitle">Track all your withdrawal request</p>
          </div>

          {/* PROFILE ICON */}
          <div className="profile-icon">
            <span>👤</span>
          </div>
        </div>

        {/* SUMMARY TABS */}
        <div className="summary-grid">
          <div
            className={`summary-card ${
              activeTab === "total" ? "active" : ""
            }`}
            onClick={() => setActiveTab("total")}
          >
            <p>Total Withdrawn</p>
            <h3>₹ {summary.total}</h3>
          </div>

          <div
            className={`summary-card blue ${
              activeTab === "processing" ? "active" : ""
            }`}
            onClick={() => setActiveTab("processing")}
          >
            <p>Processing</p>
            <h3>₹ {summary.processing}</h3>
          </div>

          <div
            className={`summary-card green ${
              activeTab === "completed" ? "active" : ""
            }`}
            onClick={() => setActiveTab("completed")}
          >
            <p>Completed</p>
            <h3>₹ {summary.completed}</h3>
          </div>

          <div
            className={`summary-card yellow ${
              activeTab === "failed" ? "active" : ""
            }`}
            onClick={() => setActiveTab("failed")}
          >
            <p>Failed</p>
            <h3>₹ {summary.failed}</h3>
          </div>
        </div>

        {/* RECENT WITHDRAWALS */}
        <div className="withdrawal-card">
          <h4>Recent Withdrawals</h4>

          {withdrawals.map((w, i) => (
            <div className="withdrawal-row" key={i}>
              <div>
                <h3>{w.amount}</h3>
                <p>
                  {w.card} · {w.date}
                </p>
                <p>Transaction Id : {w.txn}</p>
                <p
                  className={`arrival ${
                    w.status === "Released"
                      ? "green"
                      : w.status === "Pending"
                      ? "yellow"
                      : "blue"
                  }`}
                >
                  Expected Arrival : {w.arrival}
                </p>
              </div>

              <div className={`status-pill ${w.status.toLowerCase()}`}>
                {w.status}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
