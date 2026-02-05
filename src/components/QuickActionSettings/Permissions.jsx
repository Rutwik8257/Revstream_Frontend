import React, { useState } from "react";
import "./Permissions.css";
import Back from "../back/Back";

export default function Permissions() {
  const [permissions, setPermissions] = useState({
    createTasks: true,
    viewTasks: true,
    acceptTasks: true,
    submitWork: true,
    approveWork: true,

    viewPayments: true,
    releasePayments: true,
    viewInvoices: true,

    manageCompany: true,
    inviteUsers: true,
    assignRoles: true,

    viewAuditLogs: true,
    enable2FA: true,
    accessSecurityReports: true,
  });

  const toggle = (key) => {
    setPermissions({ ...permissions, [key]: !permissions[key] });
  };

  const totalPermissions = Object.keys(permissions).length;
  const enabledCount = Object.values(permissions).filter(Boolean).length;
  const showSummary = enabledCount !== totalPermissions;

  const Row = ({ title, desc, value, onChange }) => (
    <div className="perm-row">
      <div>
        <p className="perm-title">{title}</p>
        <span className="perm-desc">{desc}</span>
      </div>

      <label className="switch">
        <input type="checkbox" checked={value} onChange={onChange} />
        <span className="slider" />
      </label>
    </div>
  );

  return (
    <div className="perm-root">
      {/* EMPTY SIDEBAR SPACE */}
      <main className="perm-main">
        <h2>
          <Back />
          &nbsp;Permissions
        </h2>

        {/* 🔔 PERMISSION SUMMARY */}
        {showSummary && (
          <div className="permission-summary">
            <span className="summary-icon">!</span>
            <div>
              <strong>Permission Summary</strong>
              <p>
                {enabledCount} of {totalPermissions} permissions enabled for
                this role.
              </p>
            </div>
          </div>
        )}

        {/* TASK PERMISSIONS */}
        <section className="perm-card">
          <h3>Task Permissions</h3>

          <Row
            title="Create tasks"
            desc="Ability to create and assign new tasks"
            value={permissions.createTasks}
            onChange={() => toggle("createTasks")}
          />

          <Row
            title="View tasks"
            desc="View all tasks across the organization"
            value={permissions.viewTasks}
            onChange={() => toggle("viewTasks")}
          />

          <Row
            title="Accept tasks"
            desc="Accept assigned tasks"
            value={permissions.acceptTasks}
            onChange={() => toggle("acceptTasks")}
          />

          <Row
            title="Submit work"
            desc="Submit deliverables and mark tasks complete"
            value={permissions.submitWork}
            onChange={() => toggle("submitWork")}
          />

          <Row
            title="Approve / reject work"
            desc="Review and approve deliverables"
            value={permissions.approveWork}
            onChange={() => toggle("approveWork")}
          />
        </section>

        {/* PAYMENT PERMISSIONS */}
        <section className="perm-card">
          <h3>Payment Permissions</h3>

          <Row
            title="View payments"
            desc="See payment history and transactions"
            value={permissions.viewPayments}
            onChange={() => toggle("viewPayments")}
          />

          <Row
            title="Release payments"
            desc="Approve and release escrowed funds"
            value={permissions.releasePayments}
            onChange={() => toggle("releasePayments")}
          />

          <Row
            title="View invoices"
            desc="Access invoices and receipts"
            value={permissions.viewInvoices}
            onChange={() => toggle("viewInvoices")}
          />
        </section>

        {/* COMPANY PERMISSIONS */}
        <section className="perm-card">
          <h3>Company Permissions</h3>

          <Row
            title="Manage company profile"
            desc="Edit company information and settings"
            value={permissions.manageCompany}
            onChange={() => toggle("manageCompany")}
          />

          <Row
            title="Invite / remove users"
            desc="Manage team members"
            value={permissions.inviteUsers}
            onChange={() => toggle("inviteUsers")}
          />

          <Row
            title="Assign roles"
            desc="Change user roles and permissions"
            value={permissions.assignRoles}
            onChange={() => toggle("assignRoles")}
          />
        </section>

        {/* SECURITY PERMISSIONS */}
        <section className="perm-card security">
          <h3>Security Permissions</h3>

          <Row
            title="View audit logs"
            desc="Access system activity and security logs"
            value={permissions.viewAuditLogs}
            onChange={() => toggle("viewAuditLogs")}
          />

          <Row
            title="Enable IP restrictions"
            desc="Configure access restrictions"
            value={permissions.enable2FA}
            onChange={() => toggle("enable2FA")}
          />

          <Row
            title="Access security reports"
            desc="View security analysis and reports"
            value={permissions.accessSecurityReports}
            onChange={() => toggle("accessSecurityReports")}
          />
        </section>
      </main>
    </div>
  );
}
