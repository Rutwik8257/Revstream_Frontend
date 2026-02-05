import React from "react";
import { useNavigate } from "react-router-dom";
import "./TrustSafety.css";

const TrustSafety = () => {
  const navigate = useNavigate();

  return (
    <div className="ts-page">
      {/* HEADER */}
      <div className="ts-header">
        <div className="ts-head-row">
          <button className="ts-back" onClick={() => navigate(-1)}>←</button>

          <div>
            <h2>Trust & Safety</h2>
            <p>
              Ensuring a safe, reliable platform through verification, prevention,
              and fair dispute handling.
            </p>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="ts-scroll">
        {/* TOP STRIP */}
        <div className="ts-strip">
          <div className="ts-strip-title">
            <span className="ts-strip-icon">🛡️</span>
            <h3>Safe & Professional Environment</h3>
          </div>

          <p className="ts-strip-desc">
            REVSTREAM maintains a calm, confident approach to trust and safety. We verify companies,
            prevent misuse, and handle disputes fairly—creating a reliable environment for enterprise collaboration.
          </p>
        </div>

        {/* Company Verification */}
        <div className="ts-card">
          <div className="ts-card-title">
            <span className="ts-badge blue">👥</span>
            <h3>Company Verification Process</h3>
          </div>

          <p className="ts-desc">
            Every company undergoes verification before accessing the platform:
          </p>

          <div className="ts-verify-list">
            <div className="ts-verify-item">
              <div className="ts-num blue-num">1</div>
              <div>
                <h4>Business Registration Verification</h4>
                <p>
                  Companies must provide legal registration documents (Certificate of Incorporation,
                  Tax ID, Business License)
                </p>
                <ul>
                  <li>Verification of legal entity status</li>
                  <li>Confirmation of business address</li>
                  <li>Validation of tax identification numbers</li>
                </ul>
              </div>
            </div>

            <div className="ts-verify-item">
              <div className="ts-num blue-num">2</div>
              <div>
                <h4>Authorized Representative Validation</h4>
                <p>
                  Verification that the person registering has authority to bind the company legally
                </p>
                <ul>
                  <li>Board resolution or authorization letter</li>
                  <li>Identity verification of signatory</li>
                  <li>Corporate email domain verification</li>
                </ul>
              </div>
            </div>

            <div className="ts-verify-item">
              <div className="ts-num blue-num">3</div>
              <div>
                <h4>Business Activity Review</h4>
                <p>
                  Assessment of business legitimacy and industry sector
                </p>
                <ul>
                  <li>Website and online presence verification</li>
                  <li>Industry and business model review</li>
                  <li>References or professional credentials (if applicable)</li>
                </ul>
              </div>
            </div>

            <div className="ts-verify-item">
              <div className="ts-num blue-num">4</div>
              <div>
                <h4>NDA Signature & Agreement</h4>
                <p>
                  Digital signature of platform NDA and Terms of Service by authorized representative
                </p>
                <ul>
                  <li>Legally binding NDA acknowledgment</li>
                  <li>Terms of Service acceptance</li>
                  <li>Privacy policy consent</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ts-timeline">
            <h4>✅ Verification Timeline</h4>
            <p>
              Standard verification is completed within 2–3 business days. Express verification available for enterprise clients
              with established credentials.
            </p>
          </div>
        </div>

        {/* Misuse Prevention */}
        <div className="ts-card">
          <div className="ts-card-title">
            <span className="ts-badge amber">⚠️</span>
            <h3>Misuse Prevention</h3>
          </div>

          <p className="ts-desc">
            Proactive measures to prevent platform misuse and maintain professional standards:
          </p>

          <div className="ts-grid-2">
            <div className="ts-mini-card">
              <h4>Automated Monitoring</h4>
              <ul>
                <li>Unusual activity detection</li>
                <li>Suspicious login patterns</li>
                <li>Bulk data access alerts</li>
                <li>Payment anomaly flagging</li>
              </ul>
            </div>

            <div className="ts-mini-card">
              <h4>Content Screening</h4>
              <ul>
                <li>Task description review</li>
                <li>Communication monitoring</li>
                <li>File upload scanning</li>
                <li>Prohibited content detection</li>
              </ul>
            </div>

            <div className="ts-mini-card">
              <h4>Fraud Detection</h4>
              <ul>
                <li>Duplicate account detection</li>
                <li>Payment fraud prevention</li>
                <li>Identity verification checks</li>
                <li>Transaction pattern analysis</li>
              </ul>
            </div>

            <div className="ts-mini-card">
              <h4>Access Control</h4>
              <ul>
                <li>Session monitoring</li>
                <li>IP-based restrictions</li>
                <li>Multi-factor authentication</li>
                <li>Permission auditing</li>
              </ul>
            </div>
          </div>

          <div className="ts-proactive">
            <h4>Proactive Approach:</h4>
            <p>
              Our systems flag potential issues before they escalate. Automated alerts notify our team of suspicious patterns,
              allowing rapid investigation and intervention.
            </p>
          </div>
        </div>

        {/* Account Suspension Policy */}
        <div className="ts-card">
          <div className="ts-card-title">
            <span className="ts-badge red">⛔</span>
            <h3>Account Suspension Policy</h3>
          </div>

          <p className="ts-desc">
            Clear, fair policies for account suspension when violations occur:
          </p>

          <div className="ts-dark-panels">
            <div className="ts-dark-panel">
              <h4 className="red-title">Immediate Suspension Triggers</h4>
              <p>The following activities result in immediate account suspension:</p>
              <ul>
                <li>Fraudulent activities or payment fraud</li>
                <li>Security breaches or hacking attempts</li>
                <li>Severe NDA violations or data theft</li>
                <li>Illegal activities or prohibited content</li>
                <li>Impersonation or identity fraud</li>
              </ul>
            </div>

            <div className="ts-dark-panel">
              <h4 className="amber-title">Warning-Based Suspension</h4>
              <p>These violations trigger warnings before potential suspension:</p>
              <ul>
                <li>Repeated late deliveries or missed deadlines</li>
                <li>Unprofessional communication or behavior</li>
                <li>Minor Terms of Service violations</li>
                <li>Payment disputes (multiple occurrences)</li>
              </ul>

              <p className="ts-small">
                Warning Structure: 1st Warning → 2nd Warning → Temporary Suspension → Permanent Suspension
              </p>
            </div>

            <div className="ts-dark-panel">
              <h4 className="blue-title">Suspension Process</h4>
              <ol>
                <li>Notification: Company notified via email with specific violation details</li>
                <li>Investigation: Internal review of the incident (24–48 hours)</li>
                <li>Right to Respond: Company given 5 business days to provide explanation</li>
                <li>Decision: Final decision communicated with clear reasoning</li>
                <li>Appeal: Option to appeal within 10 days if evidence warrants review</li>
              </ol>
            </div>

            <div className="ts-dark-panel">
              <h4 className="green-title">Account Reinstatement</h4>
              <p>
                Suspended accounts may be reinstated if: (1) The violation is resolved, (2) Remediation steps are completed,
                (3) Appropriate safeguards are implemented. Reinstatement decisions are made on a case-by-case basis.
              </p>
            </div>
          </div>
        </div>

        {/* Dispute Handling */}
        <div className="ts-card">
          <div className="ts-card-title">
            <span className="ts-badge purple">⚖️</span>
            <h3>Dispute Handling</h3>
          </div>

          <p className="ts-desc">
            Fair, transparent process for resolving disputes between companies:
          </p>

          <div className="ts-dispute-list">
            {[
              {
                title: "Step 1: Direct Resolution (Recommended)",
                desc:
                  "Companies are encouraged to resolve disputes through direct communication. Platform provides structured messaging and documentation tools to facilitate resolution.",
                note: "Timeline: 5 business days for initial resolution attempt",
              },
              {
                title: "Step 2: Formal Dispute Filing",
                desc:
                  "If direct resolution fails, either party can file a formal dispute with: detailed issue description, supporting documentation, desired resolution outcome, and communication history.",
                note: "Timeline: Dispute must be filed within 15 days of issue occurrence",
              },
              {
                title: "Step 3: Platform Investigation",
                desc:
                  "REVSTREAM’s dispute team conducts a thorough investigation: review documentation & communications, examine deliverables and work quality, analyze payment & timeline history, interview both parties if necessary.",
                note: "Timeline: 10 business days for investigation completion",
              },
              {
                title: "Step 4: Mediation Decision",
                desc:
                  "Platform issues a binding decision that may include: full or partial payment release, refund to task creator, requirement for work revisions, extension of deadlines, split resolution with partial payments.",
                note: "Timeline: Decision communicated within 3 business days of investigation completion",
              },
              {
                title: "Step 5: Appeal Process (Optional)",
                desc:
                  "Either party may appeal the decision within 5 business days if new evidence emerges or procedural errors occurred. Appeals are reviewed by a senior arbitration team.",
                note: "Timeline: Appeal decision within 7 business days",
              },
            ].map((x, i) => (
              <div key={i} className="ts-dispute-item">
                <h4>{x.title}</h4>
                <p>{x.desc}</p>
                <p className="ts-note">{x.note}</p>
              </div>
            ))}

            <div className="ts-escrow">
              <h4>🟦 Escrow Protection During Disputes</h4>
              <p>
                All funds remain in escrow throughout the dispute process, ensuring financial protection for both parties.
                Funds are released only after final resolution.
              </p>
            </div>
          </div>
        </div>

        {/* Reporting Concerns */}
        <div className="ts-card">
          <div className="ts-card-title">
            <span className="ts-badge indigo">⚠️</span>
            <h3>Reporting Concerns</h3>
          </div>

          <p className="ts-desc">
            We encourage reporting of any trust or safety concerns:
          </p>

          <div className="ts-report-grid">
            <div className="ts-report-card">
              <h4>Report Security Issues</h4>
              <p>Suspicious login activity, unauthorized access, or potential security vulnerabilities</p>
              <span className="ts-email green">security@zenizo.in</span>
            </div>

            <div className="ts-report-card">
              <h4>Report Fraud or Abuse</h4>
              <p>Fraudulent activities, scams, or platform misuse</p>
              <span className="ts-email green">abuse@zenizo.in</span>
            </div>

            <div className="ts-report-card">
              <h4>Report NDA Violations</h4>
              <p>Confidentiality breaches or data misuse</p>
              <span className="ts-email green">legal@zenizo.in</span>
            </div>

            <div className="ts-report-card">
              <h4>General Support</h4>
              <p>Questions, concerns, or general assistance</p>
              <span className="ts-email green">support@zenizo.in</span>
            </div>
          </div>

          <p className="ts-confidential">
            All reports are treated confidentially. Reporter identity is protected unless disclosure is legally required or necessary
            for investigation.
            <br />
            <b>Confidential Reporting:</b>
          </p>
        </div>

        {/* Final Commitment */}
        <div className="ts-summary">
          <h4>Trust & Safety Commitment</h4>
          <p>
            REVSTREAM maintains a safe, professional environment through rigorous company verification,
            proactive misuse prevention, fair dispute resolution, and clear account policies. We handle all trust and safety matters
            with calm professionalism, ensuring reliable enterprise collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustSafety;
