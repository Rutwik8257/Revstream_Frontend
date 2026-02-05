import "./Security.css";
import { useNavigate } from "react-router-dom";
import {
  FiShield,
  FiUsers,
  FiEye,
  FiLock,
  FiCheckCircle,
  FiActivity,
  FiCreditCard,
  FiLayers,
  FiClipboard,
  FiAlertTriangle,
} from "react-icons/fi";

const SecuritySettings = () => {
  const navigate = useNavigate();

  return (
    /* RIGHT CONTENT SCROLL CONTAINER */
    <div className="sec-page-scroll">
      <div className="sec-root">
        <div className="sec-scroll">

          {/* HEADER */}
          <section className="sec-header sec-glass">
            <div className="sec-header-row">
              <span className="sec-back" onClick={() => navigate(-1)}>‹</span>
              <h1 className="sec-title">Security</h1>
            </div>

            <p className="sec-subtitle">
              This platform is built with security as a foundation, not as an afterthought.
            </p>

            <p className="sec-subtitle sec-subtitle-secondary">
              REVSTREAM is designed to protect company data, work artifacts, and payments
              with enterprise-grade security controls.
            </p>
          </section>

          {/* TOP CARDS */}
          <section className="sec-cards">
            <div className="sec-card">
              <FiShield />
              <h4>Enterprise-Grade Architecture</h4>
              <p>Secure cloud infrastructure with industry-standard practices.</p>
            </div>

            <div className="sec-card">
              <FiUsers />
              <h4>Company-Level Accountability</h4>
              <p>Only verified companies operate on the platform.</p>
            </div>

            <div className="sec-card">
              <FiEye />
              <h4>Controlled Access</h4>
              <p>Role-based permissions and restricted visibility.</p>
            </div>

            <div className="sec-card">
              <FiLock />
              <h4>Secure Payment Handling</h4>
              <p>Payments released only after approval.</p>
            </div>
          </section>

          {/* DATA PROTECTION */}
          <section className="sec-box">
            <h3 className="sec-box-title">
              <FiShield className="green" /> Data Protection
            </h3>

            <ul className="sec-list">
              <li><FiCheckCircle /> No internal company systems connected</li>
              <li><FiCheckCircle /> No production credentials stored</li>
              <li><FiCheckCircle /> No employee personal data required</li>
              <li><FiCheckCircle /> Sensitive data shared only when necessary</li>
            </ul>

            <span className="sec-hint">
              Data minimization is our primary security principle.
            </span>
          </section>

          {/* ACCESS SECURITY */}
          <section className="sec-box">
            <h3 className="sec-box-title">
              <FiLock className="blue" /> Access Security
            </h3>

            <div className="sec-pill-grid">
              <span><FiCheckCircle /> Role-Based Access Control (RBAC)</span>
              <span><FiCheckCircle /> Country-level access restriction</span>
              <span><FiCheckCircle /> Optional IP whitelisting for enterprises</span>
              <span><FiCheckCircle /> Session control and activity monitoring</span>
            </div>
          </section>

          {/* WORK EXECUTION SECURITY */}
          <section className="sec-box">
            <h3 className="sec-box-title">
              <FiLayers className="blue" /> Work Execution Security
            </h3>

            <div className="sec-plain-list">
              <div><FiClipboard /> Task-specific access only</div>
              <div><FiClipboard /> NDA-backed task execution</div>
              <div><FiClipboard /> Submission version history</div>
              <div><FiClipboard /> Review & approval workflow</div>
              <div><FiClipboard /> Complete audit trail</div>
            </div>
          </section>

          {/* PAYMENT SECURITY */}
          <section className="sec-box">
            <h3 className="sec-box-title">
              <FiCreditCard className="orange" /> Payment Security
            </h3>

            <div className="sec-pill-grid orange">
              <span><FiCreditCard /> Secure escrow-based payment flow</span>
              <span><FiCreditCard /> Funds released only after task approval</span>
              <span><FiCreditCard /> Dispute handling with administrative oversight</span>
              <span><FiCreditCard /> Transparent transaction records</span>
            </div>
          </section>

          {/* MONITORING */}
          <section className="sec-box">
            <h3 className="sec-box-title">
              <FiActivity className="purple" /> Monitoring & Audit
            </h3>

            <div className="sec-pill-grid purple">
              <span><FiActivity /> Login & activity logging</span>
              <span><FiActivity /> Permission change tracking</span>
              <span><FiActivity /> Task access history</span>
              <span><FiActivity /> Payment action logs</span>
            </div>

            <span className="sec-hint blue">
              All critical actions are logged and auditable.
            </span>
          </section>

          {/* RESPONSIBILITY */}
          <section className="sec-box sec-warning">
            <h3 className="sec-box-title">
              <FiAlertTriangle className="orange" /> Security Responsibility
            </h3>
            <p className="sec-subtitle">
              While REVSTREAM enforces platform-level security, organizations are
              responsible for internal access governance and credential hygiene.
            </p>
          </section>

            

        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
