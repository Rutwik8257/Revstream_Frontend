import React, { useState } from "react";
import "./ContentConfigControl.css";

export default function ContentConfigControl() {
  const [tasks, setTasks] = useState({
    web: true,
    design: true,
    content: true,
    marketing: true,
    video: true,
    mobile: true,
  });

  const [banners, setBanners] = useState([
    {
      id: 1,
      title: "Platform Launch!",
      message: "Welcome to our beta launch! We're excited to have you here.",
      type: "ANNOUNCEMENT",
      status: "ACTIVE",
      created: "2026-01-22",
    },
    {
      id: 2,
      title: "Scheduled Maintenance",
      message: "System maintenance on Jan 25, 2026 from 2–4 AM EST",
      type: "WARNING",
      status: "INACTIVE",
      created: "2026-01-20",
    },
  ]);

  /* ================= CREATE BANNER POPUP STATE ================= */
const [showCreateBanner, setShowCreateBanner] = useState(false);
const [bannerTitle, setBannerTitle] = useState("");
const [bannerMessage, setBannerMessage] = useState("");
const [bannerType, setBannerType] = useState("info");
const [activateNow, setActivateNow] = useState(true);


  const toggleTask = (key) => {
    setTasks({ ...tasks, [key]: !tasks[key] });
  };

  const toggleBannerStatus = (id) => {
    setBanners((prev) =>
      prev.map((b) =>
        b.id === id
          ? { ...b, status: b.status === "ACTIVE" ? "INACTIVE" : "ACTIVE" }
          : b
      )
    );
  };

  const handleCreateBanner = () => {
    if (!bannerTitle || !bannerMessage) return;

    const newBanner = {
      id: Date.now(),
      title: bannerTitle,
      message: bannerMessage,
      type: bannerType.toUpperCase(),
      status: activateNow ? "ACTIVE" : "INACTIVE",
      created: new Date().toISOString().split("T")[0],
    };

    setBanners((prev) => [newBanner, ...prev]);

     // reset + close
    setBannerTitle("");
    setBannerMessage("");
    setBannerType("info");
    setActivateNow(true);
    setShowCreateBanner(false);
  };


  return (
    <div className="ccc-root">

      <div className="ccc-container">
        {/* HEADER */}
        <div className="ccc-header">
          <div>
            <h1>Content & Config Control</h1>
            <p>
              Launch mode configuration – Control platform features and content
              during pilot phase
            </p>
          </div>

          <div className="header-right">
            <span>Pilot Mode</span>
            <span className="pill active">Active</span>
            <div className="profile-icon">👤</div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="ccc-grid">
          {/* LEFT */}
          <div className="ccc-left">
            {/* LAUNCH MODE */}
            <div className="launch-box">
              <strong>🚀 Launch Mode Active</strong>
              <p>
                You're in control of the pilot launch. Configure which task types
                are available, set limits, and manage platform announcements.
              </p>
            </div>

            {/* TASK TYPES */}
            <h3>Task Types Allowed (Pilot)</h3>

            <div className="task-grid">
              {[
                ["Web Development", "web"],
                ["Design & Graphics", "design"],
                ["Content Writing", "content"],
                ["Marketing & SEO", "marketing"],
                ["Video Editing", "video"],
                ["Mobile Development", "mobile"],
              ].map(([label, key]) => (
                <div className="task-card" key={key}>
                  <div className="task-top">
                    <strong>{label}</strong>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={tasks[key]}
                        onChange={() => toggleTask(key)}
                      />
                      <span className="slider" />
                    </label>
                  </div>
                  <p>Available to users</p>
                  <span className="pilot-only">PILOT ONLY</span>
                </div>
              ))}
            </div>

            {/* ================= TASK LIMITS & CONFIGURATION ================= */}
<h3>Task Limits & Configuration</h3>

<div className="task-limit-grid">
  {/* TASK TIME LIMIT */}
  <div className="task-limit-card">
    <div className="limit-header">
      <div className="limit-icon">⏱</div>
      <div>
        <strong>Task Time Limit</strong>
        <p className="limit-sub">Maximum duration for tasks</p>
      </div>
    </div>

    <label className="limit-label">Maximum Days</label>
    <input
      type="number"
      value={30}
      readOnly
      className="limit-input"
    />

    <p className="limit-note">
      Tasks must be completed within 30 days
    </p>
  </div>

  {/* FREE TASK COUNT */}
  <div className="task-limit-card">
    <div className="limit-header">
      <div className="limit-icon">🎁</div>
      <div>
        <strong>Free Task Count</strong>
        <p className="limit-sub">Free tasks per new user</p>
      </div>
    </div>

    <label className="limit-label">Number of Free Tasks</label>
    <input
      type="number"
      value={3}
      readOnly
      className="limit-input"
    />

    <p className="limit-note">
      New users get 3 free tasks to start
    </p>
  </div>
</div>


            {/* ================= REPLACED ANNOUNCEMENT SECTION ================= */}
            <div className="announcement-header">
              <div>
                <h3>Announcement Banners</h3>
                <p>Manage platform-wide announcements and notifications</p>
              </div>
             <button className="primary-btn" onClick={() => setShowCreateBanner(true)}>
                + Create Banner
                </button>
            </div>

            {banners.map((b) => (
              <div className="advanced-banner-card" key={b.id}>
                <div className="banner-top-row">
                  <div className="banner-title">
                    📣 <strong>{b.title}</strong>
                  </div>

                  <div className="badge-group">
                    <span className={`pill ${b.type.toLowerCase()}`}>
                      {b.type}
                    </span>
                    <span
                      className={`pill ${
                        b.status === "ACTIVE" ? "active" : "inactive"
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>

                  <div className="banner-actions">
                    <button
                      className={
                        b.status === "ACTIVE"
                          ? "deactivate-btn"
                          : "activate-btn"
                      }
                      onClick={() => toggleBannerStatus(b.id)}
                    >
                      {b.status === "ACTIVE" ? "Deactivate" : "Activate"}
                    </button>
                    <button className="icon-btn">✏️</button>
                    <button className="icon-btn delete">🗑️</button>
                  </div>
                </div>

                <p>{b.message}</p>
                <small>Created: {b.created}</small>
              </div>
            ))}

            <div className="current-config">
              <strong>⚙️ Current Configuration</strong>
              <div className="config-grid">
                <div>
                  <span>Active Task Types</span>
                  <b>4 types</b>
                </div>
                <div>
                  <span>Task Time Limit</span>
                  <b>30 days max</b>
                </div>
                <div>
                  <span>Free Tasks</span>
                  <b>3 per user</b>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="ccc-right">
            <div className="stat-card">
              <p>Total in Escrow</p>
              <h2>$15,000</h2>
              <span>Across transactions</span>
            </div>

            <div className="stat-card">
              <p>Pending Approvals</p>
              <h2>2</h2>
              <span>Awaiting review</span>
            </div>

            <div className="stat-card">
              <p>Active Disputes</p>
              <h2>1</h2>
              <span>Requires attention</span>
            </div>

            <div className="note-box">
              All payment actions are logged and auditable. Disputes must be
              resolved within 7 business days.
            </div>

            <button className="primary-btn">Export Report</button>
            <button className="secondary-btn">View All Transactions</button>
          </div>
        </div>
      </div>

      {/* ================= CREATE ANNOUNCEMENT POPUP ================= */}
{showCreateBanner && (
  <div className="modal-overlay">
    <div className="create-banner-modal">
      <h3>Create Announcement Banner</h3>
      <p className="modal-subtitle">
        Create platform-wide announcements that users will see when they log in
      </p>

      <label>Banner Title</label>
      <input
        type="text"
        placeholder="e.g., New Features Available!"
        value={bannerTitle}
        onChange={(e) => setBannerTitle(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Enter your announcement message..."
        value={bannerMessage}
        onChange={(e) => setBannerMessage(e.target.value)}
      />

      <label>Banner Type</label>
      <select
        value={bannerType}
        onChange={(e) => setBannerType(e.target.value)}
      >
        <option value="info">Info (Blue)</option>
        <option value="success">Success (Green)</option>
        <option value="warning">Warning (Orange)</option>
        <option value="danger">Critical (Red)</option>
      </select>

      <div className="toggle-row">
        <span>Activate Immediately</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={activateNow}
            onChange={() => setActivateNow(!activateNow)}
          />
          <span className="slider" />
        </label>
      </div>

      <div className="info-box">
        💡 Active banners will be displayed to all users at the top of their
        dashboard
      </div>

      <div className="modal-actions">
        <button
          className="secondary-btn"
          onClick={() => setShowCreateBanner(false)}
        >
          Cancel
        </button>
         <button className="primary-btn" onClick={handleCreateBanner}>
                Create Banner
              </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
