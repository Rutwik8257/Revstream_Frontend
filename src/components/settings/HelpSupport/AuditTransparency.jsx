import React from "react";
import { useNavigate } from "react-router-dom";
import "./AuditTransparency.css";

const AuditTransparency = () => {
  const navigate = useNavigate();

  return (
    <div className="at-page">
      {/* HEADER */}
      <div className="at-header">
        <div className="at-head-row">
          <button className="at-back" onClick={() => navigate(-1)}>←</button>

          <div>
            <h2>Audit & Transparency</h2>
            <p>If something goes wrong, it is traceable.</p>
          </div>
        </div>
      </div>

      {/*  Scroll */}
      <div className="at-scroll">

        {/*  Complete Traceability strip */}
        <div className="at-strip">
          <div className="at-strip-title">
            <span className="at-strip-icon">🟠</span>
            <h3>Complete Traceability</h3>
          </div>

          <p className="at-strip-desc">
            All critical actions on REVSTREAM are logged and auditable. Every task activity,
            access event, permission change, and payment action is recorded with complete
            traceability for security and accountability.
          </p>
        </div>

        {/*  Task Activity Logs */}
        <div className="at-card">
          <div className="at-card-title">
            <span className="at-badge blue">📘</span>
            <h3>Task Activity Logs</h3>
          </div>

          <p className="at-desc">
            Every task action is comprehensively logged with full context:
          </p>

          <div className="at-log-list">
            {[
              {
                title: "Task Creation",
                desc: "Who created the task, when, task details, assigned executor, budget, and deadline",
              },
              {
                title: "Task Acceptance/Rejection",
                desc: "Executor response, timestamp, any comments or negotiation history",
              },
              {
                title: "Work Submissions",
                desc: "Submission time, file attachments (with checksums), submission notes, version history",
              },
              {
                title: "Review & Approval Actions",
                desc: "Reviewer identity, approval/rejection decision, feedback provided, revision requests",
              },
              {
                title: "Status Changes",
                desc: "All status transitions (Draft → Active → In Progress → Under Review → Completed)",
              },
              {
                title: "Communications",
                desc: "All task-related messages, comments, and notifications with timestamps",
              },
            ].map((item, index) => (
              <div className="at-log-item" key={index}>
                <div className="at-log-left">
                  <div className="at-log-bar" />
                  <div className="at-log-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>

                <span className="at-tag">Logged</span>
              </div>
            ))}
          </div>

          <div className="at-note">
            ⏱ Log Retention: 7 years for compliance purposes
          </div>
        </div>

        {/*  Access Logs */}
        <div className="at-card">
          <div className="at-card-title">
            <span className="at-badge purple">🔒</span>
            <h3>Access Logs</h3>
          </div>

          <p className="at-desc">
            Every data access event is recorded for security monitoring and compliance:
          </p>

          <div className="at-grid-2">
            <div className="at-mini-card">
              <h4>Login Events</h4>
              <ul>
                <li>User identity</li>
                <li>Timestamp</li>
                <li>IP address</li>
                <li>Device information</li>
                <li>Geographic location</li>
                <li>Login success/failure</li>
              </ul>
            </div>

            <div className="at-mini-card">
              <h4>Data Access</h4>
              <ul>
                <li>Resource accessed</li>
                <li>Access type (read/write)</li>
                <li>User performing access</li>
                <li>Access timestamp</li>
                <li>Access method (UI/API)</li>
                <li>Data exported (if any)</li>
              </ul>
            </div>

            <div className="at-mini-card">
              <h4>File Downloads</h4>
              <ul>
                <li>File name and type</li>
                <li>Download timestamp</li>
                <li>User identity</li>
                <li>File checksum</li>
                <li>Associated task</li>
              </ul>
            </div>

            <div className="at-mini-card">
              <h4>Session Activity</h4>
              <ul>
                <li>Session duration</li>
                <li>Pages visited</li>
                <li>Actions performed</li>
                <li>Logout/timeout events</li>
                <li>Concurrent sessions</li>
              </ul>
            </div>
          </div>

          <div className="at-anomaly">
            <h4>Anomaly Detection:</h4>
            <p>
              Access logs are monitored for unusual patterns such as access from unexpected
              locations, unusual download volumes, or abnormal access times.
            </p>
          </div>
        </div>

        {/*  Permission Change Logs */}
        <div className="at-card">
          <div className="at-card-title">
            <span className="at-badge green">👤</span>
            <h3>Permission Change Logs</h3>
          </div>

          <p className="at-desc">
            All changes to user permissions and roles are tracked with complete audit history:
          </p>

          <div className="at-bullet-list">
            <div className="at-bullet">
              <span className="at-bullet-dot green-dot" />
              <div>
                <h4>Role Assignments</h4>
                <p>When roles are assigned or changed: user, old role, new role, who made the change, timestamp, reason</p>
              </div>
            </div>

            <div className="at-bullet">
              <span className="at-bullet-dot green-dot" />
              <div>
                <h4>Permission Modifications</h4>
                <p>Individual permission toggles: permission name, enabled/disabled, affected role, admin who changed it</p>
              </div>
            </div>

            <div className="at-bullet">
              <span className="at-bullet-dot green-dot" />
              <div>
                <h4>User Additions/Removals</h4>
                <p>New users invited or removed: user details, inviter, invitation date, account status changes</p>
              </div>
            </div>

            <div className="at-bullet">
              <span className="at-bullet-dot green-dot" />
              <div>
                <h4>Access Restrictions</h4>
                <p>IP whitelisting changes, geographic restrictions, MFA requirements: what changed, who changed it, when</p>
              </div>
            </div>
          </div>

          <div className="at-soft-note">
            <b>Change History View:</b> Administrators can view complete change history for any user or permission,
            allowing easy rollback and investigation of security incidents.
          </div>
        </div>

        {/*  Payment Action History */}
        <div className="at-card">
          <div className="at-card-title">
            <span className="at-badge money">💲</span>
            <h3>Payment Action History</h3>
          </div>

          <p className="at-desc">
            All financial transactions and escrow operations are logged with forensic-level detail:
          </p>

          <div className="at-pay-list">
            <div className="at-pay-item">
              <div className="at-pay-bar violet" />
              <div>
                <h4>Escrow Funding</h4>
                <p>Amount, task ID, funding company, payment method, transaction ID, timestamp, confirmation status</p>
              </div>
            </div>

            <div className="at-pay-item">
              <div className="at-pay-bar violet" />
              <div>
                <h4>Payment Releases</h4>
                <p>Release amount, recipient, approver identity, approval timestamp, release timestamp, transaction ID</p>
              </div>
            </div>

            <div className="at-pay-item">
              <div className="at-pay-bar violet" />
              <div>
                <h4>Refunds & Disputes</h4>
                <p>Refund reason, dispute details, resolution decision, refund amount, processing timeline</p>
              </div>
            </div>

            <div className="at-pay-item">
              <div className="at-pay-bar violet" />
              <div>
                <h4>Invoice Generation</h4>
                <p>Invoice number, generated date, items included, tax calculations, payment terms, download events</p>
              </div>
            </div>

            <div className="at-pay-item">
              <div className="at-pay-bar violet" />
              <div>
                <h4>Failed Transactions</h4>
                <p>Failure reason, retry attempts, resolution status, error codes from payment gateway</p>
              </div>
            </div>
          </div>

          <div className="at-info">
            <b>Financial Compliance:</b>
            Payment logs meet accounting and tax compliance requirements, with immutable records suitable for financial audits.
          </div>
        </div>

        {/* Log Security & Integrity */}
        <div className="at-card">
          <div className="at-card-title">
            <span className="at-badge red">🔴</span>
            <h3>Log Security & Integrity</h3>
          </div>

          <p className="at-desc">
            Audit logs are protected to ensure their integrity and prevent tampering:
          </p>

          <div className="at-sec-list">
            {[
              { t: "Immutable Storage", d: "Logs are written to append-only storage that prevents modification or deletion of existing entries" },
              { t: "Cryptographic Hashing", d: "Each log entry includes a cryptographic hash of the previous entry, creating a tamper-evident chain" },
              { t: "Restricted Access", d: "Only authorized security personnel can access raw audit logs; regular users see filtered views" },
              { t: "Regular Integrity Checks", d: "Automated daily verification of log integrity using cryptographic checksums" },
              { t: "Offsite Backup", d: "Logs are backed up to separate geographic locations within 24 hours of creation" },
            ].map((x, i) => (
              <div key={i} className="at-sec-item">
                <h4>{x.t}</h4>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Report Access */}
        <div className="at-card">
          <div className="at-card-title">
            <span className="at-badge teal">📑</span>
            <h3>Audit Report Access</h3>
          </div>

          <p className="at-desc">
            Companies can request audit reports for compliance and security purposes:
          </p>

          <div className="at-report-list">
            <div className="at-report-item">
              <h4>Company Activity Reports</h4>
              <p>All actions performed by your company’s users over a specified time period</p>
            </div>

            <div className="at-report-item">
              <h4>Task-Specific Audit Trail</h4>
              <p>Complete chronological history of all actions related to a specific task</p>
            </div>

            <div className="at-report-item">
              <h4>Financial Transaction Reports</h4>
              <p>Detailed payment history with all escrow and release activities</p>
            </div>

            <div className="at-report-item">
              <h4>User Access Reports</h4>
              <p>Login history, data access patterns, and permission usage for specific users</p>
            </div>
          </div>

          <div className="at-request">
            <b>Request Process:</b>
            Audit reports can be requested through the support portal. Reports are typically delivered within 2–3 business days
            in PDF or CSV format.
          </div>
        </div>

        {/* ✅ Summary */}
        <div className="at-summary">
          <h4>Audit & Transparency Summary</h4>
          <p>
            REVSTREAM provides complete traceability through comprehensive logging of task activities, access events,
            permission changes, and payment actions. All logs are tamper-proof, immutable, and retained for compliance purposes.
            Companies have full transparency into their platform activities through accessible audit reports.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AuditTransparency;
