import React, { useState } from "react";
import "./CompanyManagement.css";

export default function CompanyManagement() {
  const [companies, setCompanies] = useState([
    {
      name: "Digital Marketing Pro",
      email: "info@digitalmarketing.com",
      signup: "Jan 10, 2026",
      tasks: 45,
      risk: "LOW RISK",
      status: "Active",
    },
    {
      name: "Quick Cash LLC",
      email: "admin@quickcash.com",
      signup: "Jan 18, 2026",
      tasks: 0,
      risk: "HIGH RISK",
      status: "Pending",
    },
    {
      name: "Global Enterprises",
      email: "hello@globalent.com",
      signup: "Jan 05, 2026",
      tasks: 128,
      risk: "LOW RISK",
      status: "Active",
    },
    {
      name: "Spam Masters Ltd",
      email: "contact@spammers.com",
      signup: "Jan 12, 2026",
      tasks: 3,
      risk: "HIGH RISK",
      status: "Blocked",
    },
  ]);

  const updateStatus = (index, status) => {
    const updated = [...companies];
    updated[index].status = status;
    setCompanies(updated);
  };

  const stats = {
    total: companies.length,

    active: companies.filter((c) => c.status === "Active").length,
    blocked: companies.filter((c) => c.status === "Blocked").length,
  };

  return (
    <div className="company-root">
      <main className="company-main">
        {/* HEADER */}
        <div className="company-header">
          <div>
            <h2>Company Management</h2>
            <p className="subtitle">
              Approve / reject companies, view profiles, and block risky
              businesses
            </p>
          </div>
          <div className="profile-icon">👤</div>
        </div>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            Total Companies <span>{stats.total}</span>
          </div>

          <div className="stat-card green">
            Active <span>{stats.active}</span>
          </div>
          <div className="stat-card red">
            Blocked <span>{stats.blocked}</span>
          </div>
        </div>

        {/* LIST */}
        <div className="company-list">
          {companies.map((c, i) => (
            <div className="company-card" key={i}>
              <div className="company-info">
                <h4>
                  {c.name}
                  <span className={`status-badge ${c.status.toLowerCase()}`}>
                    {c.status}
                  </span>
                </h4>
                <p>{c.email}</p>
                <p>Signup Date: {c.signup}</p>
                <p>Total Tasks: {c.tasks}</p>
                <p
                  className={`risk ${c.risk === "HIGH RISK" ? "high" : "low"}`}
                >
                  Risk Assessment: {c.risk}
                </p>
              </div>

              <div className="company-actions">
                {c.status !== "Blocked" && (
                  <button
                    className="btn red"
                    onClick={() => updateStatus(i, "Blocked")}
                  >
                    Block
                  </button>
                )}

                <button className="btn gray">View Profile</button>
                <button className="btn gray">Task History</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
