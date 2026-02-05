import React, { useState } from "react";
import "./AccessSecurityControl.css";

export default function AccessSecurityControl() {
  const [users] = useState([
    {
      name: "John Smith",
      email: "john.smith@company.com",
      role: "Executor",
      location: "United States",
      ip: "192.168.1.100",
      status: "Active",
      sessions: "2 active",
    },
    {
      name: "Sarah Johnson",
      email: "sarah.j@company.com",
      role: "Client",
      location: "Canada",
      ip: "203.0.113.45",
      status: "Active",
      sessions: "1 active",
    },
    {
      name: "Mike Chen",
      email: "mike.chen@corp.com",
      role: "Executor",
      location: "China",
      ip: "198.51.100.78",
      status: "Blocked",
      sessions: "0 active",
    },
    {
      name: "Emma Wilson",
      email: "emma.w@startup.io",
      role: "Admin",
      location: "United Kingdom",
      ip: "192.0.2.156",
      status: "Active",
      sessions: "3 active",
    },
  ]);

  /* ================= EXISTING STATE ================= */
  const [showCountryPopup, setShowCountryPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [blockCountry, setBlockCountry] = useState(false);

  /* ================= NEW IP STATE ================= */
  const [showIpPopup, setShowIpPopup] = useState(false);
  const [allowIp, setAllowIp] = useState(false);

  /* ================= ROLE POPUP STATE (ADD THIS) ================= */
const [showRolePopup, setShowRolePopup] = useState(false);
const [newRole, setNewRole] = useState("");

/* ================= LOGOUT POPUP STATE ================= */
const [showLogoutPopup, setShowLogoutPopup] = useState(false);





  const openCountryPopup = (user) => {
    setSelectedUser(user);
    setBlockCountry(false);
    setShowCountryPopup(true);
  };

  /* ================= IP POPUP HANDLER ================= */
  const openIpPopup = (user) => {
    setSelectedUser(user);
    setAllowIp(false);
    setShowIpPopup(true);
  };
  /* ================= ROLE POPUP HANDLER (ADD THIS) ================= */
const openRolePopup = (user) => {
  setSelectedUser(user);
  setNewRole(user.role);
  setShowRolePopup(true);
};

/* ================= LOGOUT POPUP HANDLER ================= */
const openLogoutPopup = (user) => {
  setSelectedUser(user);
  setShowLogoutPopup(true);
};



  return (
    <div className="asc-root">
      <main className="asc-main">
        {/* HEADER */}
        <div className="asc-header">
          <div>
            <h2>Access & Security Control</h2>
            <p className="subtitle">
              Manage user access, enforce restrictions, and maintain
              enterprise-grade security
            </p>
          </div>
          <div className="profile-icon">👤</div>
        </div>

        {/* INFO STRIP */}
        <div className="confidence-box">
          🔐 <strong>Enterprise Confidence</strong>
          <p>
            Advanced security controls provide enterprise-level protection. All
            actions are logged, auditable, and comply with SOC 2 Type II
            standards.
          </p>
        </div>

        {/* SEARCH */}
        <input
          className="search"
          placeholder="Search users by name, email, or country..."
        />

        {/* GRID */}
        <div className="asc-grid">
          {/* LEFT */}
          <div>
            <h3 className="section-title">User Access Management</h3>

            <div className="table">
              <div className="table-head">
                <span>User</span>
                <span>Role</span>
                <span>Location</span>
                <span>IP Address</span>
                <span>Status</span>
                <span>Sessions</span>
                <span>Actions</span>
              </div>

              {users.map((u, i) => (
                <div className="table-row" key={i}>
                  <div>
                    <strong>{u.name}</strong>
                    <p>{u.email}</p>
                  </div>
                  <span className="badge role">{u.role}</span>
                  <span>{u.location}</span>
                  <span>{u.ip}</span>
                  <span className={`badge ${u.status.toLowerCase()}`}>
                    {u.status}
                  </span>
                  <span>{u.sessions}</span>

                  <div className="actions">
                    <button onClick={() => openCountryPopup(u)}>
                      Country
                    </button>
                    <button onClick={() => openIpPopup(u)}>
                      IP
                    </button>
                   <button onClick={() => openRolePopup(u)}>Role</button>
                   
                   <button className="logout" onClick={() => openLogoutPopup(u)}>
                    Logout
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* RECENT ACTIONS */}
            <h3 className="section-title">Recent Security Actions</h3>

            <div className="action-card">
              <strong>Mike Chen</strong>
              <span className="chip danger">COUNTRY BLOCK</span>
              <p>Blocked access from China due to suspicious activity</p>
              <small>2026-01-22 05:30 PM</small>
            </div>

            <div className="action-card">
              <strong>Emma Wilson</strong>
              <span className="chip warning">OVERRIDDEN</span>
              <p>Allowed IP 192.0.2.156 despite blocklist</p>
              <small>2026-01-21 11:25 AM</small>
            </div>

            <div className="action-card">
              <strong>John Smith</strong>
              <span className="chip info">ROLE RESET</span>
              <p>Role changed from Admin to Executor</p>
              <small>2026-01-20 02:15 PM</small>
            </div>
          </div>

          {/* RIGHT */}
          <div className="asc-right">
            <div className="info-card">
              <p>Total in Escrow</p>
              <h3>$15,000</h3>
              <span>Across transactions</span>
            </div>

            <div className="info-card">
              <p>Pending Approvals</p>
              <h3>2</h3>
              <span>Awaiting review</span>
            </div>

            <div className="info-card">
              <p>Active Disputes</p>
              <h3>1</h3>
              <span>Requires attention</span>
            </div>

            <div className="note">
              All payment actions are logged and auditable. Disputes must be
              resolved within 7 business days.
            </div>

            <button className="primary-btn">Export Report</button>
            <button className="secondary-btn">View All Transactions</button>
          </div>
        </div>
      </main>

      {/* ================= COUNTRY POPUP (UNCHANGED) ================= */}
      {showCountryPopup && selectedUser && (
        <div className="modal-overlay">
          <div className="country-modal">
            <div className="modal-header">
              <h3>🌍 Country Restriction</h3>
              <span className="close" onClick={() => setShowCountryPopup(false)}>
                ✕
              </span>
            </div>

            <div className="modal-info">
              <p><span>User</span>{selectedUser.name}</p>
              <p><span>Email</span>{selectedUser.email}</p>
              <p>
                <span>Current Status</span>
                <strong className="status active">{selectedUser.status}</strong>
              </p>
            </div>

            <div className="toggle-row">
              <p>Block access from {selectedUser.location}</p>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={blockCountry}
                  onChange={() => setBlockCountry(!blockCountry)}
                />
                <span className="slider" />
              </label>
            </div>

            <p className="hint">
              When enabled, all users from this country will be blocked from
              accessing the platform.
            </p>

            <div className="warning-box">
              🔒 This action will be logged for security audit. User will be
              notified via email.
            </div>

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() => setShowCountryPopup(false)}
              >
                Cancel
              </button>
              <button className="primary-btn">Confirm Action</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= IP OVERRIDE POPUP (NEW) ================= */}
      {showIpPopup && selectedUser && (
        <div className="modal-overlay">
          <div className="country-modal">
            <div className="modal-header">
              <h3>🔐 IP Override</h3>
              <span className="close" onClick={() => setShowIpPopup(false)}>
                ✕
              </span>
            </div>

            <div className="modal-info">
              <p><span>User</span>{selectedUser.name}</p>
              <p><span>Email</span>{selectedUser.email}</p>
              <p>
                <span>Current Status</span>
                <strong className="status active">{selectedUser.status}</strong>
              </p>
            </div>

            <div className="toggle-row">
              <p>Allow IP {selectedUser.ip}</p>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={allowIp}
                  onChange={() => setAllowIp(!allowIp)}
                />
                <span className="slider" />
              </label>
            </div>

            <p className="hint">
              Override global IP restrictions for this specific address. Use
              with caution.
            </p>

            <div className="warning-box">
              🔒 This action will be logged for security audit. User will be
              notified via email.
            </div>

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() => setShowIpPopup(false)}
              >
                Cancel
              </button>
              <button className="primary-btn">Confirm Action</button>
            </div>
          </div>
        </div>
      )}
       {/* ================= RESET ROLE POPUP (NEW) ================= */}
      {showRolePopup && selectedUser && (
        <div className="modal-overlay">
          <div className="country-modal">
            <div className="modal-header">
              <h3>👤 Reset User Role</h3>
              <span className="close" onClick={() => setShowRolePopup(false)}>
                ✕
              </span>
            </div>

            <div className="modal-info">
              <p><span>User</span>{selectedUser.name}</p>
              <p><span>Email</span>{selectedUser.email}</p>
              <p>
                <span>Current Status</span>
                <strong className="status active">
                  {selectedUser.status}
                </strong>
              </p>
            </div>

            <div className="select-row">
              <label>New Role</label>
              <select
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
              >
                <option value="Executor">Executor</option>
                <option value="Client">Client</option>
                <option value="Admin">Admin</option>
              </select>
              <small>Current role: {selectedUser.role}</small>
            </div>

            <div className="warning-box">
              🔒 This action will be logged for security audit. User will be
              notified via email.
            </div>

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() => setShowRolePopup(false)}
              >
                Cancel
              </button>
              <button className="primary-btn">Confirm Action</button>
            </div>
          </div>
        </div>
      )}


      {/* ================= FORCE LOGOUT POPUP (NEW) ================= */}
{showLogoutPopup && selectedUser && (
  <div className="modal-overlay">
    <div className="country-modal">
      <div className="modal-header">
        <h3>➡️ Force Logout</h3>
        <span
          className="close"
          onClick={() => setShowLogoutPopup(false)}
        >
          ✕
        </span>
      </div>

      <div className="modal-info">
        <p><span>User</span>{selectedUser.name}</p>
        <p><span>Email</span>{selectedUser.email}</p>
        <p>
          <span>Current Status</span>
          <strong className="status active">
            {selectedUser.status}
          </strong>
        </p>
      </div>

      {/* RED WARNING */}
      <div
        style={{
          background: "rgba(231,76,60,0.15)",
          borderLeft: "4px solid #e74c3c",
          padding: "12px 14px",
          borderRadius: "10px",
          fontSize: "12px",
          color: "#e74c3c",
          marginBottom: "14px",
        }}
      >
        ⚠️ This will immediately terminate all active session(s) for
        this user. They will need to log in again.
      </div>

      {/* AUDIT NOTICE */}
      <div className="warning-box">
        🔒 This action will be logged for security audit. User will be
        notified via email.
      </div>

      <div className="modal-actions">
        <button
          className="secondary-btn"
          onClick={() => setShowLogoutPopup(false)}
        >
          Cancel
        </button>
        <button className="primary-btn">
          Confirm Action
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
