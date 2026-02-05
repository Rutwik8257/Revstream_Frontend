import React, { useState } from "react";
import "./ReportSecurityConcern.css";
import { concernsApi } from "../redux/apiCalls/apiCalls";
import Back from "../back/Back";

export default function ReportSecurityConcern() {
  const [form, setForm] = useState({
    category: "",
    severity: "low",
    affected: [],
    description: "",
    date: "",
    time: "",
    email: "",
  });

  const [showSuccess, setShowSuccess] = useState(false); // ✅ NEW

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleAffected = (value) => {
    setForm((prev) => ({
      ...prev,
      affected: prev.affected.includes(value)
        ? prev.affected.filter((v) => v !== value)
        : [...prev.affected, value],
    }));
  };

  const submitReport = () => {
    if (!form.category || !form.description || !form.email) {
      alert("Please fill all required fields");
      return;
    } else {
      (async () => {
        try {
          let response = await concernsApi(form);
          console.log(response);
          setShowSuccess(true); // ✅ SHOW SUCCESS POPUP
        } catch (err) {
          console.log(err);
          alert("Error submitting report. Please try again.");
        }
      })();
    }

    // ✅ SHOW SUCCESS POPUP
  };

  return (
    <div className="security-root">
      <main className="security-main">
        <div className="security-card">
          <div className="security-header">
            <span className="back">
              <Back />
            </span>
            <h2>Report A Security Concern</h2>
          </div>

          {/* ================= SCROLLABLE FORM ================= */}
          <div className="security-scroll">
            <div className="field">
              <label>Concern Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option>Data Breach</option>
                <option>Unauthorized Access</option>
                <option>Payment Fraud</option>
              </select>
            </div>

            <div className="field">
              <label>Severity Level</label>

              {["low", "medium", "high"].map((level) => (
                <div
                  key={level}
                  className={`severity ${
                    form.severity === level ? "active" : ""
                  }`}
                  onClick={() => setForm({ ...form, severity: level })}
                >
                  ● {level === "low" && "Low – Informational"}
                  {level === "medium" && "Medium – Potential risk"}
                  {level === "high" && "High – Immediate action required"}
                </div>
              ))}
            </div>

            <div className="field">
              <label>Affected Area</label>
              <div className="checkbox-grid">
                {[
                  "User accounts",
                  "Company data",
                  "Payments / wallet",
                  "Internal tasks",
                  "API / integrations",
                ].map((item) => (
                  <label key={item} className="check">
                    <input
                      type="checkbox"
                      checked={form.affected.includes(item)}
                      onChange={() => toggleAffected(item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the issue in detail..."
              />
            </div>

            <div className="row">
              <div className="field">
                <label>Date of incident</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label>Time of incident</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Contact Email</label>
              <input
                name="email"
                placeholder="user@company.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="actions">
            <button className="submit-btn" onClick={submitReport}>
              Submit Report
            </button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </div>
      </main>

      {/* ================= SUCCESS POPUP ================= */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="success-modal">
            <span className="close-modal" onClick={() => setShowSuccess(false)}>
              ✕
            </span>

            <div className="success-icon">✔</div>

            <h3>Report Submitted Successfully</h3>
            <p className="success-text">Will respond within 24 hours</p>
          </div>
        </div>
      )}
    </div>
  );
}
