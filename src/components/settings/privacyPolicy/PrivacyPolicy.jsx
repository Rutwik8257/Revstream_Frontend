import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="pp-page">
      {/* Header */}
      <div className="pp-header">
        <h2 className="pp-title">
          Privacy Policy <span className="pp-info">?</span>
        </h2>
        <p className="pp-subtitle">
          Your privacy matters. This policy explains how REVSTREAM handles
          information responsibly and transparently.
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="pp-scroll">
        {/* Information We Collect */}
        <section className="pp-section">
          <div className="pp-section-head">
            <div className="pp-section-icon green">🧾</div>
            <h3>Information We Collect</h3>
          </div>

          <p className="pp-desc">
            To provide our services effectively, we collect the following
            information:
          </p>

          <div className="pp-item">
            <div className="pp-dot green"></div>
            <div className="pp-item-text">
              <h4>Company Details</h4>
              <p>
                Company name, email address, country, and business information
              </p>
            </div>
          </div>

          <div className="pp-item">
            <div className="pp-dot green"></div>
            <div className="pp-item-text">
              <h4>Authorized User Account Information</h4>
              <p>
                Names, email addresses, and roles of authorized platform users
              </p>
            </div>
          </div>

          <div className="pp-item">
            <div className="pp-dot green"></div>
            <div className="pp-item-text">
              <h4>Task-Related Information</h4>
              <p>
                Task descriptions, deliverables, timelines, and project-related
                communications
              </p>
            </div>
          </div>

          <div className="pp-item">
            <div className="pp-dot green"></div>
            <div className="pp-item-text">
              <h4>Payment Transaction Metadata</h4>
              <p>
                Transaction amounts, dates, and payment status (no credit card
                details are stored)
              </p>
            </div>
          </div>

          <div className="pp-note">
            We do not collect employee personal data unless explicitly provided
            by authorized company representatives.
          </div>
        </section>

        {/* Information We Do Not Collect */}
        <section className="pp-section">
          <div className="pp-section-head">
            <div className="pp-section-icon red pp-x-icon"></div>
            <h3>Information We Do Not Collect</h3>
          </div>

          <p className="pp-desc">
            Your trust is important to us. We want to be clear about what we do{" "}
            <b>not</b> collect:
          </p>

          <div className="pp-grid">
            <div className="pp-small-card">
              <div className="pp-small-top">
                <span className="pp-mini-dot red"></span>
                <h4>No Personal Employee Records</h4>
              </div>
              <p>
                We don't collect HR data, performance records, or sensitive
                employee information
              </p>
            </div>

            <div className="pp-small-card">
              <div className="pp-small-top">
                <span className="pp-mini-dot red"></span>
                <h4>No Production Credentials</h4>
              </div>
              <p>
                We never store or request access to your production systems or
                credentials
              </p>
            </div>

            <div className="pp-small-card">
              <div className="pp-small-top">
                <span className="pp-mini-dot red"></span>
                <h4>No Internal System Access</h4>
              </div>
              <p>
                Your internal systems and proprietary data remain entirely under
                your control
              </p>
            </div>

            <div className="pp-small-card">
              <div className="pp-small-top">
                <span className="pp-mini-dot red"></span>
                <h4>No Background Monitoring</h4>
              </div>
              <p>
                We do not track user activity outside the platform or monitor
                devices
              </p>
            </div>
          </div>
        </section>

        {/* How Information Is Used */}
        <section className="pp-section">
          <div className="pp-section-head">
            <div className="pp-section-icon yellow">🧠</div>
            <h3>How Information Is Used</h3>
          </div>

          <p className="pp-desc">
            We use collected information solely for the following purposes:
          </p>

          <div className="pp-bullets">
            <div className="pp-bullet">
              <span className="pp-bullet-dot"></span>
              <div>
                <h4>To enable task execution and collaboration</h4>
                <p>
                  Facilitating work assignments, progress tracking, and
                  communication between companies
                </p>
              </div>
            </div>

            <div className="pp-bullet">
              <span className="pp-bullet-dot"></span>
              <div>
                <h4>To process payments securely</h4>
                <p>
                  Managing escrow, payment releases, and transaction records
                </p>
              </div>
            </div>

            <div className="pp-bullet">
              <span className="pp-bullet-dot"></span>
              <div>
                <h4>To ensure platform security and compliance</h4>
                <p>
                  Maintaining audit logs, preventing fraud, and meeting
                  regulatory requirements
                </p>
              </div>
            </div>

            <div className="pp-bullet">
              <span className="pp-bullet-dot"></span>
              <div>
                <h4>To provide support and communication</h4>
                <p>
                  Responding to inquiries, resolving issues, and sending
                  important platform updates
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sharing Policy */}
        <section className="pp-section">
          <div className="pp-section-head">
            <div className="pp-section-icon green">🔁</div>
            <h3>Data Sharing Policy</h3>
          </div>

          <div className="pp-highlight green">
            <div className="pp-highlight-top">
              <span className="pp-mini-dot green"></span>
              <h4>Data is Never Sold</h4>
            </div>
            <p>
              We do not and will never sell your information to third parties
              under any circumstances.
            </p>
          </div>

          <div className="pp-highlight green">
            <div className="pp-highlight-top">
              <span className="pp-mini-dot green"></span>
              <h4>No Third-Party Marketing</h4>
            </div>
            <p>
              Your data is never shared with third parties for marketing,
              advertising, or promotional purposes.
            </p>
          </div>

          <div className="pp-highlight yellow">
            <div className="pp-highlight-top">
              <span className="pp-mini-dot yellow"></span>
              <h4>Task Execution Sharing Only</h4>
            </div>
            <p>
              Information is shared only between participating companies for the
              purpose of task execution and collaboration. Both parties
              explicitly consent to this sharing when engaging in a task.
            </p>
          </div>
        </section>

        {/* Data Storage & Retention */}
        <section className="pp-section">
          <div className="pp-section-head">
            <div className="pp-section-icon blue">💾</div>
            <h3>Data Storage & Retention</h3>
          </div>

          <div className="pp-two-cards">
            <div className="pp-card">
              <div className="pp-card-head">
                <span className="pp-card-icon">🔒</span>
                <h4>Secure Cloud Infrastructure</h4>
              </div>
              <p>
                All data is stored on industry-leading secure cloud
                infrastructure with encryption at rest and in transit. Our
                servers are located in certified data centers with 24/7
                monitoring and redundant backups.
              </p>
            </div>

            <div className="pp-card">
              <div className="pp-card-head">
                <span className="pp-card-icon">🕒</span>
                <h4>Retention Period</h4>
              </div>
              <p>
                Data is retained only as long as required for business
                operations and to meet legal obligations. Active task data is
                retained during project execution. Completed task records are
                maintained for 7 years for accounting and compliance purposes,
                unless deletion is requested.
              </p>
            </div>

            <div className="pp-card">
              <div className="pp-card-head">
                <span className="pp-card-icon">🧹</span>
                <h4>Secure Deletion Policies</h4>
              </div>
              <p>
                When data is no longer needed or upon request, it is securely
                deleted using industry-standard data destruction methods. All
                backups are purged within 90 days of deletion.
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="pp-section">
          <div className="pp-section-head">
            <div className="pp-section-icon cyan">👥</div>
            <h3>Your Rights</h3>
          </div>

          <p className="pp-desc">
            You have full control over your information. As a user, you can:
          </p>

          <div className="pp-rights-grid">
            <div className="pp-right">
              <span className="pp-right-badge">1</span>
              <div>
                <h4>Access Your Information</h4>
                <p>Request a copy of all data we hold about you at any time</p>
              </div>
            </div>

            <div className="pp-right">
              <span className="pp-right-badge">2</span>
              <div>
                <h4>Request Corrections</h4>
                <p>
                  Update or correct any inaccurate information in your profile
                </p>
              </div>
            </div>

            <div className="pp-right">
              <span className="pp-right-badge">3</span>
              <div>
                <h4>Request Deletion</h4>
                <p>Request deletion of your data where legally permissible</p>
              </div>
            </div>

            <div className="pp-right">
              <span className="pp-right-badge">4</span>
              <div>
                <h4>Contact Support</h4>
                <p>Reach out with any privacy concerns or questions</p>
              </div>
            </div>
          </div>

          <p className="pp-footer-text">
            To exercise any of these rights, please contact our support team at{" "}
            <span className="pp-link">support@jenzio.in</span>. We will respond
            to your request within 30 days.
          </p>
        </section>

        {/* Compliance & Updates */}
        <section className="pp-section">
          <div className="pp-section-head">
            <div className="pp-section-icon violet">🛡️</div>
            <h3>Compliance & Updates</h3>
          </div>

          <div className="pp-card">
            <div className="pp-card-head">
              <span className="pp-card-icon">📌</span>
              <h4>Data Protection Standards</h4>
            </div>
            <p>
              REVSTREAM is aligned with industry-standard data protection
              regulations including GDPR principles, SOC 2 Type II frameworks,
              and ISO 27001 security standards. We continuously monitor and
              update our practices to maintain the highest level of data
              protection.
            </p>
          </div>

          <div className="pp-card">
            <div className="pp-card-head">
              <span className="pp-card-icon">📝</span>
              <h4>Policy Updates</h4>
            </div>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. Any material
              changes will be communicated to you via email and prominently
              displayed on our platform at least 30 days before taking effect.
              Continued use of the platform after updates constitutes acceptance
              of the revised policy.
            </p>
          </div>

          <p className="pp-last-updated">✅ Last Updated: January 15, 2026</p>
        </section>

        {/* Contact Us */}
        <section className="pp-section">
          <div className="pp-section-head">
            <div className="pp-section-icon blue">📩</div>
            <h3>Contact Us</h3>
          </div>

          <p className="pp-desc">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please don't hesitate to
            contact us:
          </p>

          <div className="pp-contact-grid">
            <div className="pp-contact-card">
              <h4>Privacy Queries</h4>
              <p className="pp-link">support@jenzio.in</p>
            </div>

            <div className="pp-contact-card">
              <h4>Website</h4>
              <p className="pp-link">www.jenzio.in</p>
            </div>
          </div>

          <div className="pp-response">
            <h4>Response Time:</h4>
            <p>
              We aim to respond to all privacy-related inquiries within 3-5
              business days. For urgent matters, please mark your email as
              "Urgent - Privacy Concern".
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
