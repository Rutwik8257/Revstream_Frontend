import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataHandlingRetention.css";

const DataHandlingRetention = () => {
  const navigate = useNavigate();

  return (
    <div className="dhr-page">
      {/* HEADER */}
      <div className="dhr-header">
        <div className="dhr-head-row">
          <button className="dhr-back" onClick={() => navigate(-1)}>←</button>

          <div>
            <h2>Data Handling & Retention</h2>
            <p>Very important for security-conscious companies.</p>
          </div>
        </div>
      </div>

      {/* ✅ SCROLL */}
      <div className="dhr-scroll">
        {/* ✅ TOP STRIP */}
        <div className="dhr-strip">
          <div className="dhr-strip-title">
            <span className="dhr-strip-icon">🟣</span>
            <h3>Data Minimization Principle</h3>
          </div>

          <p className="dhr-strip-desc">
            We store only the minimum data required to operate the platform. Every piece of data collected serves
            a specific, documented purpose, and we never collect data “just in case.”
          </p>
        </div>

        {/* ✅ What Data Is Stored */}
        <div className="dhr-card">
          <div className="dhr-card-title">
            <span className="dhr-badge green">✅</span>
            <h3>What Data Is Stored</h3>
          </div>

          <p className="dhr-desc">
            REVSTREAM stores only essential data required for platform functionality:
          </p>

          <div className="dhr-stored-list">
            <div className="dhr-stored-item">
              <div className="dhr-line green-line" />
              <div>
                <h4>Company Profile Information</h4>
                <ul>
                  <li>Company legal name and registration details</li>
                  <li>Business email and contact information</li>
                  <li>Company address and country</li>
                  <li>Tax identification numbers (for payment processing)</li>
                </ul>
                <p className="dhr-purpose"><b>Purpose:</b> Account verification, legal compliance, invoicing</p>
              </div>
            </div>

            <div className="dhr-stored-item">
              <div className="dhr-line green-line" />
              <div>
                <h4>Authorized User Accounts</h4>
                <ul>
                  <li>Name and work email address</li>
                  <li>Role and permissions assigned</li>
                  <li>Account creation date</li>
                  <li>Login credentials (encrypted passwords)</li>
                </ul>
                <p className="dhr-purpose"><b>Purpose:</b> Access control, authentication, audit trails</p>
              </div>
            </div>

            <div className="dhr-stored-item">
              <div className="dhr-line green-line" />
              <div>
                <h4>Task Data</h4>
                <ul>
                  <li>Task descriptions and requirements</li>
                  <li>Deliverables and work submissions</li>
                  <li>Task timeline and status history</li>
                  <li>Communications between parties</li>
                  <li>Review feedback and approvals</li>
                </ul>
                <p className="dhr-purpose"><b>Purpose:</b> Task execution, collaboration, dispute resolution</p>
              </div>
            </div>

            <div className="dhr-stored-item">
              <div className="dhr-line green-line" />
              <div>
                <h4>Payment & Transaction Data</h4>
                <ul>
                  <li>Transaction amounts and dates</li>
                  <li>Escrow status and release history</li>
                  <li>Invoice records</li>
                  <li>Payment method metadata (no card details)</li>
                </ul>
                <p className="dhr-purpose"><b>Purpose:</b> Financial operations, accounting, tax compliance</p>
              </div>
            </div>

            <div className="dhr-stored-item">
              <div className="dhr-line green-line" />
              <div>
                <h4>Activity & Audit Logs</h4>
                <ul>
                  <li>User actions and timestamps</li>
                  <li>Login/logout events with IP addresses</li>
                  <li>Data access records</li>
                  <li>Permission changes</li>
                  <li>Security-related events</li>
                </ul>
                <p className="dhr-purpose"><b>Purpose:</b> Security monitoring, compliance, troubleshooting</p>
              </div>
            </div>

            <div className="dhr-stored-item">
              <div className="dhr-line green-line" />
              <div>
                <h4>Technical & Diagnostic Data</h4>
                <ul>
                  <li>Browser and device information</li>
                  <li>Error logs and crash reports</li>
                  <li>Performance metrics</li>
                </ul>
                <p className="dhr-purpose"><b>Purpose:</b> Platform stability, bug fixes, performance optimization</p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ What Data Is NOT Stored */}
        <div className="dhr-card">
          <div className="dhr-card-title">
            <span className="dhr-badge red">⛔</span>
            <h3>What Data Is NOT Stored</h3>
          </div>

          <p className="dhr-desc">
            We want to be crystal clear about what we do not collect or store:
          </p>

          <div className="dhr-not-grid">
            <div className="dhr-not-card">
              <h4>Employee Personal Data</h4>
              <p>No personal information about your employees beyond authorized platform users</p>
            </div>

            <div className="dhr-not-card">
              <h4>Credit Card Numbers</h4>
              <p>Payment processing handled by certified third-party processors; we never store card details</p>
            </div>

            <div className="dhr-not-card">
              <h4>Production Credentials</h4>
              <p>No access to your internal systems, databases, or production environment credentials</p>
            </div>

            <div className="dhr-not-card">
              <h4>HR or Personnel Records</h4>
              <p>No employee performance reviews, salary data, or HR-related information</p>
            </div>

            <div className="dhr-not-card">
              <h4>Customer/Client Data</h4>
              <p>Your customer databases and client information remain entirely under your control</p>
            </div>

            <div className="dhr-not-card">
              <h4>Unrelated Browsing Data</h4>
              <p>No tracking of your activity outside the REVSTREAM platform</p>
            </div>

            <div className="dhr-not-card">
              <h4>Sensitive Personal Information</h4>
              <p>No social security numbers, health data, biometric data, or other sensitive personal information</p>
            </div>

            <div className="dhr-not-card">
              <h4>Proprietary Source Code</h4>
              <p>Unless explicitly shared as part of a task deliverable</p>
            </div>
          </div>

          <div className="dhr-commit">
            <h4>Our Commitment:</h4>
            <p>
              If data is not necessary for platform operation, we don’t collect it.
              This reduces our security burden and your privacy risk.
            </p>
          </div>
        </div>

        {/* ✅ Retention Period */}
        <div className="dhr-card">
          <div className="dhr-card-title">
            <span className="dhr-badge orange">🕒</span>
            <h3>Retention Period</h3>
          </div>

          <p className="dhr-desc">
            Different types of data have different retention periods based on business and legal requirements:
          </p>

          <div className="dhr-retention">
            {[
              { title: "Active Account Data", desc: "Company profiles, user accounts, and ongoing task data are retained while your account is active", tag: "Duration: Active Period" },
              { title: "Completed Task Records", desc: "Task details, deliverables, and communications retained for accounting, tax, and legal compliance", tag: "Duration: 7 Years" },
              { title: "Financial & Tax Records", desc: "Transaction records, invoices, and payment history retained per tax authority requirements", tag: "Duration: 7 Years" },
              { title: "Security & Audit Logs", desc: "Access logs, security events, and audit trails retained for security investigations and compliance", tag: "Duration: 7 Years" },
              { title: "Terminated Account Data", desc: "After account closure, non-financial data is retained for 90 days to allow recovery if closure was accidental", tag: "Duration: 90 Days" },
              { title: "Backup Archives", desc: "Deleted data may persist in backup systems for up to 90 days before complete purge", tag: "Duration: 90 Days After Deletion" },
            ].map((x, i) => (
              <div key={i} className="dhr-ret-row">
                <div className="dhr-ret-left">
                  <div className="dhr-ret-line orange-line" />
                  <div>
                    <h4>{x.title}</h4>
                    <p>{x.desc}</p>
                  </div>
                </div>
                <span className="dhr-tag">{x.tag}</span>
              </div>
            ))}

            <div className="dhr-legal-ex">
              <h4>Legal Hold Exception:</h4>
              <p>
                In the event of litigation, regulatory investigation, or legal disputes, relevant data may be
                retained beyond standard periods as required by law.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Secure Deletion Policy */}
        <div className="dhr-card purple-border">
          <div className="dhr-card-title">
            <span className="dhr-badge purple">🧹</span>
            <h3>Secure Deletion Policy</h3>
          </div>

          <p className="dhr-desc">
            When data reaches the end of its retention period or upon request, it is securely deleted:
          </p>

          <div className="dhr-del-steps">
            <div className="dhr-step">
              <span className="dhr-step-num purple-num">1</span>
              <p><b>Multi-Stage Deletion Process</b> — Data marked as deleted and removed from production systems</p>
            </div>
            <div className="dhr-step">
              <span className="dhr-step-num purple-num">2</span>
              <p><b>Verification Period</b> — 30-day window to confirm deletion was intentional</p>
            </div>
            <div className="dhr-step">
              <span className="dhr-step-num purple-num">3</span>
              <p><b>Hard Delete</b> — Permanent removal from primary databases using secure deletion methods</p>
            </div>
            <div className="dhr-step">
              <span className="dhr-step-num purple-num">4</span>
              <p><b>Backup Purge</b> — Removal from all backup systems within 90 days</p>
            </div>
          </div>

          <div className="dhr-mini-block">
            <h4>Cryptographic Erasure</h4>
            <p>
              For encrypted data, we use cryptographic erasure by destroying the encryption keys, making the data
              permanently unrecoverable even if residual copies exist.
            </p>
          </div>

          <div className="dhr-mini-block">
            <h4>Physical Media Destruction</h4>
            <p>
              When storage hardware is decommissioned, it undergoes physical destruction or DoD-standard wiping
              to prevent data recovery.
            </p>
          </div>

          <div className="dhr-mini-block">
            <h4>Deletion Verification</h4>
            <p>
              Automated systems verify that deleted data is no longer accessible in production, staging,
              or development environments.
            </p>
          </div>

          <div className="dhr-user-note">
            <h4>User-Initiated Deletion:</h4>
            <p>
              You can request deletion of your data at any time (subject to legal retention requirements).
              We’ll process your request within 30 days and provide confirmation.
            </p>
          </div>
        </div>

        {/* ✅ Data Storage Location & Security */}
        <div className="dhr-card">
          <div className="dhr-card-title">
            <span className="dhr-badge blue">💾</span>
            <h3>Data Storage Location & Security</h3>
          </div>

          <div className="dhr-storage-grid">
            <div className="dhr-storage-card">
              <h4>Storage Location</h4>
              <p>Data is stored in certified cloud data centers with redundant facilities across multiple geographic regions</p>
            </div>

            <div className="dhr-storage-card">
              <h4>Encryption at Rest</h4>
              <p>All data encrypted using AES-256 encryption with keys managed through hardware security modules (HSM)</p>
            </div>

            <div className="dhr-storage-card">
              <h4>Encryption in Transit</h4>
              <p>TLS 1.3 encryption for all data transmission between your browser and our servers</p>
            </div>

            <div className="dhr-storage-card">
              <h4>Access Controls</h4>
              <p>Multi-factor authentication, role-based access, and principle of least privilege for all data access</p>
            </div>

            <div className="dhr-storage-card">
              <h4>Backup & Recovery</h4>
              <p>Automated daily backups with 30-day retention, stored in geographically separate locations</p>
            </div>

            <div className="dhr-storage-card">
              <h4>Disaster Recovery</h4>
              <p>Comprehensive disaster recovery plan with RTO of 4 hours and RPO of 1 hour</p>
            </div>
          </div>

          <div className="dhr-summary">
            <h4>Data Handling Summary</h4>
            <p>
              REVSTREAM practices data minimization, collecting only what’s necessary for platform operation.
              We’re transparent about what we store and what we don’t, maintain appropriate retention periods
              for compliance, and securely delete data when no longer needed.
            </p>

            <p className="dhr-contact">
              Questions about data handling? Contact us at <span>support@zenizo.in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataHandlingRetention;
