import React, { useState } from "react";
import "./EscrowPaymentSafety.css";
import Back from "../back/Back";

export default function EscrowPaymentSafety() {
  const [steps] = useState([
    {
      id: 1,
      title: "Task Acceptance & Deposit",
      desc: "Client deposits full payment into escrow when assigning a task. Funds are locked and cannot be withdrawn by either party.",
    },
    {
      id: 2,
      title: "Work in Progress",
      desc: "Freelancer completes the task according to requirements. Payment remains safely locked in escrow.",
    },
    {
      id: 3,
      title: "Deliverable Submission",
      desc: "Freelancer submits completed work for review. Client has a specified period to review and request revisions.",
    },
    {
      id: 4,
      title: "Review & Approval",
      desc: "Client reviews submitted work. Upon approval (or auto-approval), funds are released.",
    },
    {
      id: 5,
      title: "Payment Release",
      desc: "Approved funds are transferred to freelancer’s wallet. Transaction is completed securely.",
    },
  ]);

  return (
    <div className="escrow-root">
      <main className="escrow-main">
        {/* HEADER */}
        
        <h2><Back /> &nbsp;Escrow & Payment Safety</h2>
        <p className="subtitle">
          Comprehensive protection for your transactions with secure escrow
          services and payment guarantees.
        </p>

        {/* INFO BANNER */}
        <div className="info-banner">
          <strong>🔒 Your payment is safe</strong>
          <p>
            RESTSAFE uses industry-standard escrow protection to ensure funds
            are only released when both parties agree. Your money is held
            securely until work is completed and verified.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="feature-grid">
          <div className="feature-card">
            <h4>🔐 How Escrow Works</h4>
            <p>
              Funds are deposited into a secure escrow account when a task is
              accepted. They remain locked until the work is completed and
              approved by both parties.
            </p>
          </div>

          <div className="feature-card">
            <h4>⏳ When Funds Are Locked</h4>
            <p>
              Payments are locked immediately once a task is confirmed. This
              guarantees payment security and prevents fraud.
            </p>
          </div>

          <div className="feature-card">
            <h4>✅ Conditions for Release</h4>
            <p>
              Funds are released after successful task delivery, client
              approval, or automatic release if no dispute is raised.
            </p>
          </div>

          <div className="feature-card">
            <h4>🛡 Payment Protection</h4>
            <p>
              Our escrow system protects freelancers and clients by ensuring
              payments are made only when deliverables meet expectations.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <h3 className="section-title">Escrow Process Timeline</h3>

        <div className="timeline">
          {steps.map((step) => (
            <div className="timeline-step" key={step.id}>
              <div className="step-number">{step.id}</div>
              <div className="step-content">
                <strong>{step.title}</strong>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
