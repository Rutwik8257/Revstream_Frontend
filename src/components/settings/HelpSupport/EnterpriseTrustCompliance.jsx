
import { useNavigate } from "react-router-dom";
import {
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlinePencilAlt,
  HiOutlineSearch,
  HiOutlineDatabase,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import "./EnterpriseTrustCompliance.css";

const EnterpriseTrustCompliance = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: "compliance",
      title: "Compliance & Governance",
      desc: "Corporate governance standards and compliance framework",
      color: "blue",
      path: "/app/dashboardLayout/complianceGovernance",
      icon: <HiOutlineShieldCheck />,
      status: "completed",
      lastUpdated: "2 days ago",
    },
    {
      id: "tos",
      title: "Terms of Service",
      desc: "Legal clarity between parties and platform usage rules",
      color: "purple",
      path: "/app/dashboardLayout/termsOfService",
      icon: <HiOutlineDocumentText />,
      status: "action",
    },
    {
      id: "nda",
      title: "NDA & Legal Assurance",
      desc: "Legal binding agreements and data protection commitments",
      color: "green",
      path: "/app/dashboardLayout/ndaLegalAssurance",
      icon: <HiOutlinePencilAlt />,
      status: "review",
    },
    {
      id: "audit",
      title: "Audit & Transparency",
      desc: "Complete traceability and audit logging capabilities",
      color: "orange",
      path: "/app/dashboardLayout/auditTransparency",
      icon: <HiOutlineSearch />,
      status: "action",
    },
    {
      id: "data",
      title: "Data Handling & Retention",
      desc: "Data storage policies and retention practices",
      color: "gray",
      path: "/app/dashboardLayout/dataHandlingRetention",
      icon: <HiOutlineDatabase />,
      status: "completed",
      lastUpdated: "1 week ago",
    },
    {
      id: "trust",
      title: "Trust & Safety",
      desc: "Verification, abuse prevention, and dispute handling",
      color: "cyan",
      path: "/app/dashboardLayout/trustSafety",
      icon: <HiOutlineBadgeCheck />,
      status: "action",
    },
  ];

  const statusMeta = {
    completed: { label: "Compliant", action: "View" },
    action: { label: "Action Required", action: "Configure" },
    review: { label: "In Review", action: "Review" },
  };

  const checklist = [
    { label: "Security", path: "/app/dashboardLayout/security" },
    { label: "Privacy Policy", path: "/app/dashboardLayout/privacyPolicy" },
    { label: "Access & Control", path: "/app/dashboardLayout/accessControl" },
    { label: "Permissions", path: "/app/dashboardLayout/permissions" },
    { label: "Help & Support", path: "/app/dashboardLayout/helpSupport" },
    { label: "Compliance & Governance", path: "/app/dashboardLayout/complianceGovernance" },
    { label: "Terms of Service", path: "/app/dashboardLayout/termsOfService" },
    { label: "NDA & Legal Assurance", path: "/app/dashboardLayout/ndaLegalAssurance" },
    { label: "Audit & Transparency", path: "/app/dashboardLayout/auditTransparency" },
    { label: "Data Handling & Retention", path: "/app/dashboardLayout/dataHandlingRetention" },
    { label: "Trust & Safety", path: "/app/dashboardLayout/trustSafety" },
  ];

  return (
    <div className="etc-page">
      {/* HEADER */}
      <div className="etc-header">
        <div className="etc-head-row">
          <button className="etc-back" onClick={() => navigate(-1)}>←</button>
          <h2>Enterprise Trust Compliance</h2>
        </div>

        <p className="etc-subtitle">
          Monitor compliance status and complete required enterprise actions.
        </p>

        <div className="etc-strip">
          <span className="etc-strip-text">
            <b>REVSTREAM</b> enterprise controls must remain compliant to ensure platform readiness.
          </span>
        </div>
      </div>

      {/* CARDS */}
      <div className="etc-grid">
        {cards.map((c) => {
          const meta = statusMeta[c.status];

          return (
            <div key={c.id} className="etc-card">
              <div className="etc-card-top">
                <div className={`etc-icon ${c.color}`}>{c.icon}</div>
                <span className={`etc-status ${c.status}`}>
                  {meta.label}
                </span>
              </div>

              <h3 className="etc-title">{c.title}</h3>
              <p className="etc-desc">{c.desc}</p>

              {c.lastUpdated && (
                <span className="etc-updated">
                  Last updated {c.lastUpdated}
                </span>
              )}

              <button
                className={`etc-action ${c.status}`}
                onClick={() => navigate(c.path)}
              >
                {meta.action}
              </button>
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default EnterpriseTrustCompliance;
