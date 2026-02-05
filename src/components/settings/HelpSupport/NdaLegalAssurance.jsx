import React from "react";
import { useNavigate } from "react-router-dom";
import "./NdaLegalAssurance.css";

const NdaLegalAssurance = () => {
  const navigate = useNavigate();

  return (
    <div className="nda-page">
      {/* HEADER */}
      <div className="nda-header">
        <div className="nda-head-row">
          <button className="nda-back" onClick={() => navigate(-1)}>
            ←
          </button>

          <div>
            <h2>NDA & Legal Assurance</h2>
            <p>This page builds massive trust through legally binding agreements and accountability.</p>
          </div>
        </div>
      </div>

      {/* ✅ Scroll Area */}
      <div className="nda-scroll">
        {/* ✅ Legal Foundation Strip */}
        <div className="nda-strip">
          <div className="nda-strip-title">
            <span className="nda-strip-icon">🛡️</span>
            <h3>Legal Foundation of Trust</h3>
          </div>

          <p className="nda-strip-desc">
            All work on REVSTREAM is governed by legally binding agreements between companies.
            Your confidential information is protected through comprehensive NDA enforcement at every level.
          </p>
        </div>

        {/* ✅ Company Onboarding NDA */}
        <div className="nda-card">
          <div className="nda-card-title">
            <span className="nda-badge blue">📄</span>
            <h3>Company Onboarding NDA</h3>
          </div>

          <p className="nda-desc">
            Every company signs a comprehensive Non-Disclosure Agreement during platform registration:
          </p>

          <div className="nda-mini-list">
            <div className="nda-mini-card">
              <div className="mini-head">
                <span className="mini-dot blue-dot" />
                <h4>Platform-Wide Confidentiality</h4>
              </div>
              <p>
                All companies agree not to disclose any confidential information encountered on the platform,
                including task details, business processes, and proprietary information
              </p>
            </div>

            <div className="nda-mini-card">
              <div className="mini-head">
                <span className="mini-dot blue-dot" />
                <h4>Corporate Binding Agreement</h4>
              </div>
              <p>
                NDAs are signed by authorized corporate representatives, making the agreement legally binding
                at the company level
              </p>
            </div>

            <div className="nda-mini-card">
              <div className="mini-head">
                <span className="mini-dot blue-dot" />
                <h4>Duration & Survival</h4>
              </div>
              <p>
                Confidentiality obligations remain in effect for 5 years after account termination or task completion
              </p>
            </div>

            <div className="nda-mini-card">
              <div className="mini-head">
                <span className="mini-dot blue-dot" />
                <h4>Legal Remedies</h4>
              </div>
              <p>
                Breaches of the NDA entitle the aggrieved party to seek injunctive relief and monetary damages
              </p>
            </div>
          </div>

          <div className="nda-footnote">
            <b>Verification Required:</b>
            <br />
            Before activating an account, companies must provide corporate documentation and authorized
            signatory details to ensure the NDA is legally enforceable.
          </div>
        </div>

        {/* ✅ Task-Level NDA Enforcement */}
        <div className="nda-card purple-border">
          <div className="nda-card-title">
            <span className="nda-badge purple">🔒</span>
            <h3>Task-Level NDA Enforcement</h3>
          </div>

          <p className="nda-desc">
            Beyond the platform-wide NDA, each task engagement includes specific confidentiality protections:
          </p>

          <div className="nda-steps">
            <div className="nda-step">
              <div className="step-number purple-num">1</div>
              <div>
                <h4>Task-Specific Confidentiality</h4>
                <p>
                  Each task creates a bilateral confidentiality obligation between the task creator and executor,
                  covering all materials, communications, and deliverables
                </p>
              </div>
            </div>

            <div className="nda-step">
              <div className="step-number purple-num">2</div>
              <div>
                <h4>Automatic NDA Activation</h4>
                <p>
                  When a company accepts a task, they automatically agree to task-specific confidentiality terms
                  displayed during the acceptance workflow
                </p>
              </div>
            </div>

            <div className="nda-step">
              <div className="step-number purple-num">3</div>
              <div>
                <h4>Access Restriction</h4>
                <p>
                  Task details are visible only to participating companies and authorized platform administrators
                  (under their own NDA obligations)
                </p>
              </div>
            </div>

            <div className="nda-step">
              <div className="step-number purple-num">4</div>
              <div>
                <h4>Custom NDA Clauses</h4>
                <p>
                  Companies can add custom confidentiality requirements or exclusions specific to sensitive tasks
                </p>
              </div>
            </div>
          </div>

          <div className="nda-subnote">
            <b>Multi-Layer Protection:</b>
            <br />
            Task-level NDAs complement the platform-wide agreement, creating multiple layers of legal protection
            for your confidential information.
          </div>
        </div>

        {/* ✅ No Reuse / Resale of Data */}
        <div className="nda-card">
          <div className="nda-card-title">
            <span className="nda-badge red">⛔</span>
            <h3>No Reuse / Resale of Data</h3>
          </div>

          <div className="nda-danger">
            <h4>Absolute Prohibition</h4>
            <p>REVSTREAM and all participating companies are strictly prohibited from:</p>
            <ul>
              <li>Reusing task deliverables for any purpose other than the specific task they were created for</li>
              <li>Reselling or redistributing confidential information, code, designs, or materials</li>
              <li>Repurposing proprietary processes or methodologies disclosed during task execution</li>
              <li>Creating derivative work from confidential information without explicit written consent</li>
              <li>Training AI models or building datasets using confidential task data</li>
            </ul>
          </div>

          <div className="nda-box green-box">
            <h4>Intellectual Property Rights</h4>
            <p>
              All intellectual property rights in task deliverables transfer to the task creator upon payment,
              unless otherwise specified in writing. The executor retains no rights to reuse the work.
            </p>
          </div>

          <div className="nda-box yellow-box">
            <h4>Platform Commitment</h4>
            <p>
              REVSTREAM does not use task data for any purpose other than facilitating the specific task.
              We do not aggregate, anonymize, or analyze task content for product development or other purposes.
            </p>
          </div>
        </div>

        {/* ✅ Company-Level Legal Accountability */}
        <div className="nda-card">
          <div className="nda-card-title">
            <span className="nda-badge indigo">🏢</span>
            <h3>Company-Level Legal Accountability</h3>
          </div>

          <p className="nda-desc">
            Legal accountability on REVSTREAM operates at the corporate level, ensuring institutional responsibility:
          </p>

          <div className="nda-gray-list">
            <div className="nda-gray-item">
              <h4>Corporate Entities Are Parties</h4>
              <p>
                All agreements are between corporate entities (companies), not individual employees.
                This ensures that legal obligations continue even if individual staff members change.
              </p>
            </div>

            <div className="nda-gray-item">
              <h4>Authorized Representative Signature</h4>
              <p>
                NDAs and agreements must be signed by authorized company representatives (directors, officers,
                or designated signatories with proper documentation).
              </p>
            </div>

            <div className="nda-gray-item">
              <h4>Company Indemnification</h4>
              <p>
                Each company indemnifies the other against breaches by its employees, contractors,
                or agents, reinforcing corporate responsibility for individual actions.
              </p>
            </div>

            <div className="nda-gray-item">
              <h4>Dispute Resolution Between Companies</h4>
              <p>
                Any disputes or breaches are resolved between companies through formal dispute resolution processes,
                maintaining professional corporate relationships.
              </p>
            </div>
          </div>

          <div className="nda-why">
            <h4>Why Company-Level Matters:</h4>
            <p>
              Corporate accountability provides stability and enforceability. It ensures that obligations are backed
              by corporate resources and governance, not dependent on individuals who may leave the organization.
            </p>
          </div>
        </div>

        {/* ✅ Summary */}
        <div className="nda-summary">
          <h3>Legal Assurance Summary</h3>

          <div className="nda-summary-list">
            <div className="nda-sum-item">
              <span className="sum-check">✔</span>
              <div>
                <h4>Legally Binding NDAs at Every Level</h4>
                <p>Platform-wide and task-specific confidentiality protection</p>
              </div>
            </div>

            <div className="nda-sum-item">
              <span className="sum-check">✔</span>
              <div>
                <h4>No Data Reuse or Resale</h4>
                <p>Absolute prohibition with clear IP transfer terms</p>
              </div>
            </div>

            <div className="nda-sum-item">
              <span className="sum-check">✔</span>
              <div>
                <h4>Corporate-Level Accountability</h4>
                <p>Institutional responsibility backed by corporate governance</p>
              </div>
            </div>

            <div className="nda-sum-item">
              <span className="sum-check">✔</span>
              <div>
                <h4>Enforceable Legal Remedies</h4>
                <p>Clear legal recourse for breaches with injunctive relief and damages</p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Contact */}
        <div className="nda-contact">
         
          <p>
            For legal inquiries or to request custom NDA terms for specific tasks, contact our legal team at{" "}
            <span className="nda-link">support@revstream.in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NdaLegalAssurance;
