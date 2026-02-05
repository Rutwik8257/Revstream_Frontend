import { useNavigate } from "react-router-dom";
import "./Settings.css";
import {
  FiLock,
  FiBell,
  FiZap,
  FiShield,
  FiCheckCircle,
  FiChevronRight,
} from "react-icons/fi";

const Settings = () => {
  const navigate = useNavigate();

  const settingsItems = [
    {
      title: "Permissions & Access Control",
      description: "Manage roles, access levels and restrictions",
      icon: <FiLock />,
      path: "/app/dashboardLayout/accessAndControls",
    },
    {
      title: "Notification Settings",
      description: "Control alerts, reminders and updates",
      icon: <FiBell />,
      path: "/app/dashboardLayout/notificationsSettings",
    },
    {
      title: "Quick Access Settings",
      description: "Customize shortcuts and quick actions",
      icon: <FiZap />,
      path: "/app/DashboardLayout/QuickActions",
    },
    {
      title: "Security Settings",
      description: "Platform security, audits and monitoring",
      icon: <FiShield />,
      path: "/app/dashboardLayout/security",
    },
    {
      title: "Privacy Policy",
      description: "Understand how data is handled and protected",
      icon: <FiCheckCircle />,
      path: "/app/dashboardLayout/privacyPolicy",
    },
  ];

  return (
    <div className="settings-root">

      {/* HEADER */}
      <div className="settings-header">
        <h2>Settings</h2>
        <p>Manage your preferences, security and platform behavior</p>
      </div>

      {/* SETTINGS LIST */}
      <div className="settings-grid">
        {settingsItems.map((item, index) => (
          <div
            key={index}
            className="settings-tile"
            onClick={() => navigate(item.path)}
          >
            <div className="settings-tile-left">
              <div className="settings-icon">
                {item.icon}
              </div>

              <div className="settings-text">
                <h4>{item.title}</h4>
                <span>{item.description}</span>
              </div>
            </div>

            <FiChevronRight className="settings-arrow" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Settings;
