import React from "react";
import "./DisputeMisuseControl.css";

export default function DisputeMisuseControl() {
  return (
    <div className="dm-root">
      <main className="dm-main">
        {/* HEADER */}
        <div className="dm-header">
          <div>
            <h2>Dispute & Misuse Control</h2>
            <p className="subtitle">
              Review and resolve platform disputes with full audit trail
            </p>
          </div>
          <div className="profile-icon">👤</div>
        </div>

        {/* ALERT */}
        <div className="dm-alert">
          ⚠️ <strong>Critical Platform Feature</strong>
          <p>
            Disputes must be resolved within 7 business days. Failure may impact
            platform trust score.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="dm-grid">
          {/* LEFT COLUMN */}
          <div className="dm-left">
            <h3 className="section-title">Active Disputes</h3>

            {/* DISPUTE CARD 1 */}
            <div className="dispute-card">
              <div className="card-head">
                <div>
                  <h4>Website Redesign - Homepage</h4>
                  <p>ID: D-002</p>
                  <p>Executor: John Smith</p>
                </div>
                <div className="amount">
                  $5,000 <span className="chip pending">Pending</span>
                </div>
              </div>

              <p className="reason">
                <strong>Dispute Reason:</strong> Work not completed as per
                requirements. Missing responsive design.
              </p>

              <div className="card-actions">
                <button className="approve">Approve Refund</button>
                <button className="partial">Partial Refund</button>
                <button className="reject">Reject Dispute</button>
              </div>
            </div>

            {/* DISPUTE CARD 2 */}
            <div className="dispute-card">
              <div className="card-head">
                <div>
                  <h4>Logo Design Package</h4>
                  <p>ID: D-003</p>
                  <p>Executor: Sarah Johnson</p>
                </div>
                <div className="amount">
                  $1,500{" "}
                  <span className="chip investigating">Investigating</span>
                </div>
              </div>

              <p className="reason">
                <strong>Dispute Reason:</strong> Client requested refund after
                approval screen.
              </p>
            </div>

            {/* DISPUTE CARD 3 */}
            <div className="dispute-card">
              <div className="card-head">
                <div>
                  <h4>Mobile App Development</h4>
                  <p>ID: D-004</p>
                  <p>Executor: Mike Chen</p>
                </div>
                <div className="amount">
                  $12,000 <span className="chip pending">Pending</span>
                </div>
              </div>

              <p className="reason">
                <strong>Dispute Reason:</strong> App crashes on iOS devices. Not
                tested before delivery.
              </p>

              <div className="card-actions">
                <button className="approve">Approve Refund</button>
                <button className="partial">Partial Refund</button>
                <button className="reject">Reject Dispute</button>
              </div>
            </div>

            {/* ACCESS LOGS */}
            <h3 className="section-title">Access Logs</h3>

            <div className="logs-box">
              <div className="log-row head">
                <span>Admin</span>
                <span>Action</span>
                <span>Timestamp</span>
                <span>Duration</span>
              </div>

              <div className="log-row">
                <span>Admin</span>
                <span>Viewed dispute D-002</span>
                <span>2026-01-22 10:30 AM</span>
                <span>15m</span>
              </div>

              <div className="log-row">
                <span>Admin</span>
                <span>Updated dispute D-003</span>
                <span>2026-01-22 09:15 AM</span>
                <span>8m</span>
              </div>

              <div className="log-row">
                <span>Support</span>
                <span>Viewed dispute D-004</span>
                <span>2026-01-21 04:45 PM</span>
                <span>22m</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="dm-right">
            <div className="info-card">
              <p>Total in Escrow</p>
              <h3>$15,000</h3>
              <span>Across disputes</span>
            </div>

            <div className="info-card">
              <p>Pending Approvals</p>
              <h3>2</h3>
              <span>Awaiting action</span>
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
            <button className="secondary-btn">
              View All Transactions
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
