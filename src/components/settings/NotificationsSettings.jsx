import "./NotificationsSettings.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FiBell,
  FiShield,
  FiClock,
  FiCreditCard,
  FiActivity,
} from "react-icons/fi";
import { saveNotificationSettings } from "../redux/apiCalls/apiCalls";

/* ---------- STORAGE KEY ---------- */
const STORAGE_KEY = "revstream_notification_settings";

const defaultSettings = {
  allNotifications: true,
  frequency: "realtime",

  dndEnabled: true,
  dndFrom: "10:00",
  dndTo: "22:00",
  dndSummaryOnly: true,

  timezone: "UTC +00:00 — London",

  security: {
    newDevice: true,
    authChanges: true,
  },

  billing: {
    invoices: true,
    failedCharges: true,
  },

  project: {
    taskAssigned: true,
    taskCompleted: true,
  },
};

const NotificationsSettings = () => {
  const navigate = useNavigate();

  let buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "50%",
    marginLeft: "200px",
    borderRadius: "20px",
    fontSize: "20px",
    fontWeight: "bold",
  };
  /* ---------- STATE ---------- */
  const [settings, setSettings] = useState(defaultSettings);

  let handleClick = async () => {
    let response = await saveNotificationSettings(settings);
    if (response.status === 200) {
      alert("Settings saved successfully");
    } else {
      alert("Failed to save settings");
    }
  };

  /* ---------- LOAD FROM STORAGE ---------- */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  /* ---------- SAVE TO STORAGE ---------- */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  /* ---------- HELPERS ---------- */
  const update = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const toggleNested = (group, key) => {
    setSettings((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [key]: !prev[group][key],
      },
    }));
  };

  /* ---------- UI ---------- */
  return (
    <div className="noti-page-scroll">
      <div className="noti-wrapper">
        {/* HEADER */}
        <section className="noti-header">
          <div className="noti-header-row">
            <span className="noti-back" onClick={() => navigate(-1)}>
              ‹
            </span>
            <h1>Notifications</h1>
          </div>

          <p>
            Stay informed without distractions. Fine-tune how and when REVSTREAM
            communicates with you.
          </p>
        </section>

        {/* MASTER */}
        <section className="noti-card">
          <div className="noti-row">
            <div className="noti-left">
              <FiBell />
              <div>
                <h4>All Notifications</h4>
                <span>Master control for notifications</span>
              </div>
            </div>

            <label className="noti-switch">
              <input
                type="checkbox"
                checked={settings.allNotifications}
                onChange={() =>
                  update("allNotifications", !settings.allNotifications)
                }
              />
              <span />
            </label>
          </div>
        </section>

        {/* FREQUENCY */}
        <section className="noti-card">
          <div className="noti-title">
            <FiBell /> General Preferences
          </div>

          <span className="noti-subtitle">Notification Frequency</span>

          <div className="noti-pill-group">
            {["realtime", "hourly", "daily"].map((f) => (
              <button
                key={f}
                className={settings.frequency === f ? "active" : ""}
                onClick={() => update("frequency", f)}
              >
                {f === "realtime"
                  ? "Real-time"
                  : f === "hourly"
                    ? "Hourly digest"
                    : "Daily summary"}
              </button>
            ))}
          </div>
        </section>

        {/* DND */}
        <section className="noti-card">
          <div className="noti-row">
            <div className="noti-left">
              <FiClock />
              <div>
                <h4>Do Not Disturb</h4>
                <span>Mute notifications during quiet hours</span>
              </div>
            </div>

            <label className="noti-switch">
              <input
                type="checkbox"
                checked={settings.dndEnabled}
                onChange={() => update("dndEnabled", !settings.dndEnabled)}
              />
              <span />
            </label>
          </div>

          {settings.dndEnabled && (
            <div className="noti-time-grid">
              <div>
                <label>From</label>
                <input
                  type="time"
                  value={settings.dndFrom}
                  onChange={(e) => update("dndFrom", e.target.value)}
                />
              </div>

              <div>
                <label>To</label>
                <input
                  type="time"
                  value={settings.dndTo}
                  onChange={(e) => update("dndTo", e.target.value)}
                />
              </div>

              <div className="noti-checkbox">
                <input
                  type="checkbox"
                  checked={settings.dndSummaryOnly}
                  onChange={() =>
                    update("dndSummaryOnly", !settings.dndSummaryOnly)
                  }
                />
                <span>Daily summary only</span>
              </div>
            </div>
          )}
        </section>

        {/* TIMEZONE */}
        <section className="noti-card">
          <div className="noti-title">
            <FiClock /> Timezone Selection
          </div>

          <select
            className="noti-select"
            value={settings.timezone}
            onChange={(e) => update("timezone", e.target.value)}
          >
            <option>UTC +00:00 — London</option>
            <option>UTC +05:30 — India</option>
            <option>UTC −05:00 — New York</option>
          </select>
        </section>

        {/* SECURITY */}
        <section className="noti-card">
          <div className="noti-title">
            <FiShield /> Security & Authentication
          </div>

          <div className="noti-toggle-row">
            <h5>Login from new device</h5>
            <label className="noti-switch">
              <input
                type="checkbox"
                checked={settings.security.newDevice}
                onChange={() => toggleNested("security", "newDevice")}
              />
              <span />
            </label>
          </div>

          <div className="noti-toggle-row">
            <h5>Password or 2FA changes</h5>
            <label className="noti-switch">
              <input
                type="checkbox"
                checked={settings.security.authChanges}
                onChange={() => toggleNested("security", "authChanges")}
              />
              <span />
            </label>
          </div>
        </section>

        {/* BILLING */}
        <section className="noti-card">
          <div className="noti-title">
            <FiCreditCard /> Billing & Account
          </div>

          <div className="noti-toggle-row">
            <h5>Invoice ready & receipts</h5>
            <label className="noti-switch">
              <input
                type="checkbox"
                checked={settings.billing.invoices}
                onChange={() => toggleNested("billing", "invoices")}
              />
              <span />
            </label>
          </div>

          <div className="noti-toggle-row">
            <h5>Failed charges</h5>
            <label className="noti-switch">
              <input
                type="checkbox"
                checked={settings.billing.failedCharges}
                onChange={() => toggleNested("billing", "failedCharges")}
              />
              <span />
            </label>
          </div>
        </section>

        {/* PROJECT */}
        <section className="noti-card">
          <div className="noti-title">
            <FiActivity /> Project Activity
          </div>

          <div className="noti-toggle-row">
            <h5>Task assigned to me</h5>
            <label className="noti-switch">
              <input
                type="checkbox"
                checked={settings.project.taskAssigned}
                onChange={() => toggleNested("project", "taskAssigned")}
              />
              <span />
            </label>
          </div>

          <div className="noti-toggle-row">
            <h5>Task completed</h5>
            <label className="noti-switch">
              <input
                type="checkbox"
                checked={settings.project.taskCompleted}
                onChange={() => toggleNested("project", "taskCompleted")}
              />
              <span />
            </label>
          </div>
        </section>
        <button style={buttonStyle} onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotificationsSettings;
