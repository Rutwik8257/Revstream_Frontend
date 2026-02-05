import "./TermsOfService.css";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
    const navigate = useNavigate(); 
  return (
    <div className="tos-page">
      {/* Header */}
      <div className="tos-header">
        <div className="tos-head-row">
          <button className="tos-back-btn" onClick={() => navigate(-1)}>
            ←
          </button>

          <h2 className="tos-title">Terms of Service</h2>
        </div>
        <p className="tos-subtitle">
          This platform legal clarity between <b>ZENZIO IT TECH PVT LTD</b>, Platform
          (<b>REVSTREAM</b>), and participating companies understands corporate governance.
        </p>
      </div>

      {/* Scroll Content */}
      <div className="tos-scroll">
        {/* Intro Note */}
        <div className="tos-intro">
          These Terms of Service ("Terms") govern your use of the REVSTREAM platform
          operated by <b>ZENZIO IT TECH PVT LTD</b> ("Company", "we", "us", or "our").
          By accessing or using the platform, you agree to be bound by these Terms.
        </div>

        {/* Platform Usage Rules */}
        <div className="tos-card">
          <div className="tos-card-head">
            <span className="tos-icon blue">📘</span>
            <h3>Platform Usage Rules</h3>
          </div>

          <h4 className="tos-subhead green">Acceptable Use</h4>
          <p className="tos-text">
            You agree to use the platform only for lawful business purposes and in compliance
            with all applicable laws and regulations.
          </p>

          <ul className="tos-list green">
            <li>Legitimate business task execution and collaboration</li>
            <li>Professional communication between authorized parties</li>
            <li>Secure payment processing through escrow mechanisms</li>
          </ul>

          <h4 className="tos-subhead red">Prohibited Activities</h4>
          <ul className="tos-list red">
            <li>Unauthorized access to other users’ data or accounts</li>
            <li>Transmission of malicious code, viruses, or harmful software</li>
            <li>Fraudulent activities, misrepresentation, or deceptive practices</li>
            <li>Attempting to circumvent security measures or access controls</li>
            <li>Violation of intellectual property rights or confidentiality agreements</li>
          </ul>

          <h4 className="tos-subhead yellow">Account Security</h4>
          <p className="tos-text">
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activities that occur under your account.
          </p>
        </div>

        {/* Company Responsibilities */}
        <div className="tos-card">
          <div className="tos-card-head">
            <span className="tos-icon green">🏢</span>
            <h3>Company Responsibilities</h3>
          </div>

          <p className="tos-text">
            Companies using the REVSTREAM platform have the following responsibilities:
          </p>

          <div className="tos-pill">
            <h4>Accurate Information</h4>
            <p>
              Provide accurate, current, and complete company information during registration
              and maintain its accuracy
            </p>
          </div>

          <div className="tos-pill">
            <h4>Authorized Representatives</h4>
            <p>
              Ensure that only authorized employees have access to your company account and
              that they understand these Terms
            </p>
          </div>

          <div className="tos-pill">
            <h4>Confidentiality & NDA Compliance</h4>
            <p>
              Honor all confidentiality obligations and NDA terms when handling task data and
              communications
            </p>
          </div>

          <div className="tos-pill">
            <h4>Timely Communication</h4>
            <p>
              Respond promptly to task-related communications and platform notifications
            </p>
          </div>

          <div className="tos-pill">
            <h4>Legal Compliance</h4>
            <p>
              Ensure all activities comply with applicable laws, regulations, and industry
              standards
            </p>
          </div>
        </div>

        {/* Task Execution Responsibilities */}
        <div className="tos-card">
          <div className="tos-card-head">
            <span className="tos-icon violet">🧩</span>
            <h3>Task Execution Responsibilities</h3>
          </div>

          <div className="tos-two-col">
            <div>
              <h4 className="tos-col-title">Task Creator</h4>
              <ul className="tos-col-list">
                <li>Provide clear task requirements</li>
                <li>Set realistic deadlines</li>
                <li>Fund escrow before task start</li>
                <li>Review deliverables promptly</li>
                <li>Release payment upon approval</li>
              </ul>
            </div>

            <div>
              <h4 className="tos-col-title">Task Executor</h4>
              <ul className="tos-col-list">
                <li>Accept tasks within capability</li>
                <li>Meet agreed timelines</li>
                <li>Deliver quality work</li>
                <li>Communicate progress updates</li>
                <li>Address feedback professionally</li>
              </ul>
            </div>
          </div>

          <div className="tos-note">
            <b>Task Agreement:</b> <br />
            Each task creates a binding agreement between participating companies. Both
            parties must fulfill their obligations in good faith.
          </div>
        </div>

        {/* Payment & Dispute Terms */}
        <div className="tos-card">
          <div className="tos-card-head">
            <span className="tos-icon yellow">💰</span>
            <h3>Payment & Dispute Terms</h3>
          </div>

          <h4 className="tos-subhead">Escrow Payment System</h4>

          <p className="tos-text"><b>Funding:</b> Task funds must be deposited into escrow before task execution begins.</p>
          <p className="tos-text"><b>Release:</b> Funds are released upon task approval by the creator.</p>
          <p className="tos-text"><b>Platform Fee:</b> A service fee applies to each transaction as outlined in your pricing agreement.</p>

          <h4 className="tos-subhead">Dispute Resolution</h4>

          <div className="tos-steps">
            <p>⚠️ Step 1 - Direct Resolution: Parties should first attempt to resolve disputes through direct communication</p>
            <p>⚠️ Step 2 - Platform Mediation: If unresolved, either party may request platform mediation</p>
            <p>⚠️ Step 3 - Escrow Hold: During disputes, escrow funds remain held until resolution</p>
            <p>⚠️ Step 4 - Final Decision: Platform’s mediation decision is final and binding</p>
          </div>

          <div className="tos-footer-note">
            Refunds may be processed only in cases of task cancellation before work begins or
            as determined through dispute resolution.
          </div>
        </div>

        {/* Termination Policy */}
        <div className="tos-card">
          <div className="tos-card-head">
            <span className="tos-icon red">✖</span>
            <h3>Termination Policy</h3>
          </div>

          <h4 className="tos-subhead">Voluntary Termination</h4>
          <ul className="tos-col-list">
            <li>Completion of all active tasks</li>
            <li>Settlement of all outstanding payments</li>
            <li>30-day notice period</li>
          </ul>

          <div className="tos-danger-box">
            <h4>Platform-Initiated Termination</h4>
            <p>We reserve the right to suspend or terminate accounts that:</p>
            <ul className="tos-col-list">
              <li>Violate these Terms of Service</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Compromise platform security</li>
              <li>Repeatedly fail to meet obligations</li>
              <li>Damage platform reputation or other users</li>
            </ul>
          </div>

          <div className="tos-footer-note">
            Upon termination, you lose access to the platform. However, confidentiality
            obligations and completed task records remain in effect as required by law.
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="tos-card">
          <h3>Limitation of Liability</h3>

          <div className="tos-dark-note">
            REVSTREAM is provided "as is" without warranties of any kind. To the maximum extent
            permitted by law:
            <ul className="tos-col-list">
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Our liability is limited to fees paid in the 12 months preceding the claim</li>
              <li>We are not responsible for disputes between participating companies</li>
              <li>Service interruptions or technical issues do not constitute breach</li>
            </ul>
          </div>
        </div>

        {/* Governing Law */}
        <div className="tos-card">
          <h3>Governing Law</h3>
          <p className="tos-text">
            These Terms are governed by the laws of India. Any disputes arising from these Terms or
            your use of the platform shall be subject to the exclusive jurisdiction of courts in
            Bangalore, Karnataka, India.
          </p>
        </div>

        {/* Questions */}
        <div className="tos-bottom">
          <h4>Questions About These Terms?</h4>
          <p>
            For clarifications or questions regarding these Terms of Service, please contact us at{" "}
            <span className="tos-link">support@zenzio.in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;