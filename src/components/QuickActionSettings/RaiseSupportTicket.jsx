import React, { useState } from "react";
import "./RaiseSupportTicket.css";
import { raiseATicket } from "../redux/apiCalls/apiCalls";
import Back from "../back/Back";

export default function RaiseSupportTicket() {
  const [form, setForm] = useState({
    category: "",
    taskId: "",
    shortDesc: "",
    details: "",
    attachment: "",
  });

  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitTicket = () => {
    if (!form.category || !form.shortDesc || !form.details) {
      setShowError(true);

      // auto hide after 3s
      setTimeout(() => setShowError(false), 3000);
      return;
    } else {
      console.log("Ticket Submitted:", form);
      (async () => {
        try {
          let response = await raiseATicket(form);
          console.log(response);
          alert("Support ticket submitted successfully!");
        } catch (err) {
          console.log(err);
        }
      })();
    }
  };

  return (
    <div className="ticket-root">
      {/* ================= ERROR POPUP ================= */}
      {showError && (
        <div className="error-toast">
          <div>
            <strong>Missing Fields</strong>
            <p>Please fill in all required fields.</p>
          </div>
          <span className="close" onClick={() => setShowError(false)}>
            ✕
          </span>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="ticket-main">
        <div className="ticket-card">
          <div className="ticket-header">
            <span className="back">
              <Back />
            </span>
            <h2>Raise A Support Ticket</h2>
          </div>

          <p className="subtitle">
            For issues related to tasks, payments, or access
          </p>

          <div className="form-grid">
            <div className="field">
              <label>Issue Category *</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option>Payment Issue</option>
                <option>Task Issue</option>
                <option>Account Access</option>
              </select>
            </div>

            <div className="field">
              <label>Task Id </label>
              <input
                name="taskId"
                placeholder="eg: Task - 123"
                value={form.taskId}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label>Short Description *</label>
            <input
              name="shortDesc"
              placeholder="Brief Summary About Issue"
              value={form.shortDesc}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Detailed Explanation *</label>
            <textarea
              name="details"
              placeholder="Please provide as much details possible"
              value={form.details}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>File Attachment ( URL )</label>
            <input
              name="attachment"
              placeholder="Hyderabad"
              value={form.attachment}
              onChange={handleChange}
            />
          </div>

          <div className="submit-wrap">
            <button className="submit-btn" onClick={submitTicket}>
              Submit Ticket
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
