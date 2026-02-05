import { useNavigate } from "react-router-dom";
import "./LiveEarnings.css";

export default function LiveEarnings() {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Earnings", value: "₹ 0", icon: "₹" },
    { label: "In Progress", value: "₹ 0", icon: "⏳" },
    { label: "Pending Release", value: "₹ 0", icon: "⏱" },
    { label: "Completed task", value: "0", icon: "✔" },
  ];

  return (
    <div className="earning-root">
      <main className="earning-main">
        <div className="earning-header">
          <div>
            <h2>Payment Summary</h2>
            <p className="earning-subtitle">
              Track your task payments and earnings
            </p>
          </div>
        </div>

        <div className="earning-stats-grid">
          {stats.map((s, i) => (
            <div className="earning-stat-card" key={i}>
              <div>
                <p className="earning-stat-label">{s.label}</p>
                <h3>{s.value}</h3>
              </div>
              <span className="earning-stat-icon">{s.icon}</span>
            </div>
          ))}
        </div>
      </main>

      <div className="earning-illustration">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
          alt="Earnings Illustration"
        />
      </div>
    </div>
  );
}
