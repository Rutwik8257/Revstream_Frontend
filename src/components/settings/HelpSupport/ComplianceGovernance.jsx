import React from "react";
import { useNavigate } from "react-router-dom";
import "./ComplianceGovernance.css";

const ComplianceGovernance = () => {
  const navigate = useNavigate();

  return (
    <div className="cg-page">
      {/* HEADER */}
      <div className="cg-header">
        <div className="cg-head-row">
          <button className="cg-back" onClick={() => navigate(-1)}>
            ←
          </button>
          <div>
            <h2>Compliance & Governance</h2>
            <p>This platform understands corporate governance.</p>
          </div>
        </div>
      </div>

      {/* ✅ Scroll Area */}
      <div className="cg-scroll">
        {/* Enterprise-Grade Governance */}
        <div className="cg-card cg-highlight">
          <div className="cg-card-title">
            <span className="cg-badge">🛡️</span>
            <h3>Enterprise-Grade Governance</h3>
          </div>

          <p className="cg-desc">
            REVSTREAM follows industry-standard data protection and governance
            practices suitable for enterprise usage. We maintain honest,
            transparent policies without overpromising or making unverified
            claims.
          </p>
        </div>

        {/* NDA Enforcement Policy */}
        <div className="cg-card">
          <div className="cg-card-title">
            <span className="cg-badge green">✅</span>
            <h3>NDA Enforcement Policy</h3>
          </div>

          <p className="cg-desc">
            Every company engaging on REVSTREAM operates under legally binding
            Non-Disclosure Agreements:
          </p>

          <div className="cg-bullets">
            <div className="cg-bullet">
              <span className="dot green-dot">✔</span>
              <div>
                <h4>Onboarding NDA</h4>
                <p>
                  All companies sign a comprehensive NDA during platform
                  registration covering confidentiality obligations
                </p>
              </div>
            </div>

            <div className="cg-bullet">
              <span className="dot green-dot">✔</span>
              <div>
                <h4>Task-Level Enforcement</h4>
                <p>
                  Each task engagement includes specific confidentiality terms
                  between participating parties
                </p>
              </div>
            </div>

            <div className="cg-bullet">
              <span className="dot green-dot">✔</span>
              <div>
                <h4>Company-Level Accountability</h4>
                <p>
                  Legal responsibility rests with companies, not individuals,
                  ensuring institutional accountability
                </p>
              </div>
            </div>

            <div className="cg-bullet">
              <span className="dot green-dot">✔</span>
              <div>
                <h4>No Data Reuse or Resale</h4>
                <p>
                  Strict prohibition on reusing, reselling, or repurposing any
                  confidential information
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Handling Standards */}
        <div className="cg-card">
          <div className="cg-card-title">
            <span className="cg-badge purple">🔒</span>
            <h3>Data Handling Standards</h3>
          </div>

          <p className="cg-desc">
            Our data handling practices align with recognized industry
            frameworks:
          </p>

          <div className="cg-grid-2">
            <div className="cg-mini-card">
              <h4>Encryption Standards</h4>
              <p>AES-256 encryption at rest, TLS 1.3 in transit</p>
            </div>

            <div className="cg-mini-card">
              <h4>Access Control</h4>
              <p>Role-based access with principle of least privilege</p>
            </div>

            <div className="cg-mini-card">
              <h4>Data Minimization</h4>
              <p>Only essential data collected and retained</p>
            </div>

            <div className="cg-mini-card">
              <h4>Secure Infrastructure</h4>
              <p>Enterprise-grade cloud hosting with 99.9% uptime</p>
            </div>
          </div>

          <div className="cg-framework">
            <h4>Framework Alignment:</h4>
            <p>
              Our practices align with GDPR principles, ISO 27001 security
              controls, and SOC 2 Type II requirements.
            </p>
          </div>
        </div>

        {/* Two Columns */}
        <div className="cg-two-col">
          {/* Left */}
          <div className="cg-card">
            <div className="cg-card-title">
              <span className="cg-badge orange">🔐</span>
              <h3>Access Control Governance</h3>
            </div>

            <p className="cg-desc">
              Granular access controls ensure proper segregation of duties and
              data protection:
            </p>

            <div className="cg-mini-list">
              <div className="cg-mini-card">
                <h4>Multi-Level Authorization</h4>
                <p>
                  Different permission levels for viewing, editing, approving,
                  and administering data
                </p>
              </div>

              <div className="cg-mini-card">
                <h4>Session Management</h4>
                <p>
                  Automatic session timeout, secure authentication, and
                  multi-factor authentication support
                </p>
              </div>

              <div className="cg-mini-card">
                <h4>IP & Geographic Restrictions</h4>
                <p>
                  Optional IP whitelisting and geographic access controls for
                  enhanced security
                </p>
              </div>

              <div className="cg-mini-card">
                <h4>Activity Monitoring</h4>
                <p>
                  Real-time monitoring of access patterns and anomaly detection
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="cg-card">
            <div className="cg-card-title">
              <span className="cg-badge blue">📘</span>
              <h3>Regulatory Awareness Statement</h3>
            </div>

            <div className="cg-info-card">
              <h4>Honest & Transparent Approach</h4>
              <p>
                REVSTREAM is designed with enterprise compliance in mind. While
                we implement robust security and governance practices, we make
                no unverified certification claims.
              </p>
            </div>

            <div className="cg-mini-card">
              <h4>GDPR-Aligned Practices</h4>
              <p>
                Our platform follows GDPR principles including data
                minimization, purpose limitation, and user rights enforcement
              </p>
            </div>

            <div className="cg-mini-card">
              <h4>Industry Best Practices</h4>
              <p>
                We implement controls aligned with ISO 27001, SOC 2 Type II, and
                NIST Cybersecurity Framework
              </p>
            </div>

            <div className="cg-mini-card">
              <h4>Continuous Improvement</h4>
              <p>
                Regular security assessments, vulnerability scanning, and policy
                updates to maintain high standards
              </p>
            </div>

            <div className="cg-warning">
              <h4>⚠ Important Note</h4>
              <p>
                REVSTREAM does not claim ISO certifications, SOC 2 audit
                completion, or other third-party certifications unless
                officially verified. We believe in honest communication about
                our security posture.
              </p>
            </div>
          </div>
        </div>

        {/* Audit */}
        <div className="cg-card">
          <div className="cg-card-title">
            <span className="cg-badge">🧾</span>
            <h3>Audit & Accountability Model</h3>
          </div>

          <p className="cg-desc">
            Comprehensive audit trails ensure complete traceability and
            accountability:
          </p>

          <div className="cg-audit-list">
            <div className="cg-audit-item">
              <span className="cg-dot blue-dot">•</span>
              <div>
                <h4>User Action Logging</h4>
                <p>
                  All user actions are logged with timestamp, IP address, and
                  user identity
                </p>
              </div>
            </div>

            <div className="cg-audit-item">
              <span className="cg-dot blue-dot">•</span>
              <div>
                <h4>Data Access Trails</h4>
                <p>
                  Every data access event is recorded for compliance and
                  investigation purposes
                </p>
              </div>
            </div>

            <div className="cg-audit-item">
              <span className="cg-dot blue-dot">•</span>
              <div>
                <h4>Permission Changes</h4>
                <p>
                  All role and permission modifications are tracked with full
                  change history
                </p>
              </div>
            </div>

            <div className="cg-audit-item">
              <span className="cg-dot blue-dot">•</span>
              <div>
                <h4>Payment & Financial Actions</h4>
                <p>
                  Complete audit trail of all financial transactions and escrow
                  operations
                </p>
              </div>
            </div>

            <div className="cg-audit-item">
              <span className="cg-dot blue-dot">•</span>
              <div>
                <h4>Tamper-Proof Logs</h4>
                <p>
                  Audit logs are immutable and stored with cryptographic
                  integrity verification
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="cg-summary">
          <h4>Governance Summary</h4>
          <p>
            REVSTREAM provides enterprise-grade governance suitable for MNCs
            through robust NDA enforcement, comprehensive audit trails, granular
            access controls, and alignment with industry-standard frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceGovernance;
