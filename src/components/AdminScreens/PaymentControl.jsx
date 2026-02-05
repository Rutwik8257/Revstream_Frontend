import React, { useState } from "react";
import "./PaymentControl.css";

export default function PaymentControl() {
  const [payments, setPayments] = useState([
    {
      title: "Dashboard Redesign",
      freelancer: "John Smith",
      date: "Jan 21, 2026",
      amount: 1200,
      status: "Pending",
    },
    {
      title: "Mobile App Development",
      freelancer: "Sarah Johnson",
      date: "Jan 20, 2026",
      amount: 5000,
      status: "Approved",
    },
    {
      title: "Logo Design Project",
      freelancer: "Mike Wilson",
      date: "Jan 19, 2026",
      amount: 800,
      status: "Disputed",
    },
    {
      title: "Website Content Writing",
      freelancer: "Emma Davis",
      date: "Jan 18, 2026",
      amount: 1500,
      status: "Released",
    },
    {
      title: "API Integration",
      freelancer: "Alex Turner",
      date: "Jan 17, 2026",
      amount: 3200,
      status: "Held",
    },
    {
      title: "UI/UX Consulting",
      freelancer: "Lisa Chen",
      date: "Jan 21, 2026",
      amount: 2400,
      status: "Pending",
    },
  ]);

  return (
    <div className="payment-root">
      <main className="payment-main">
        {/* HEADER */}
        <div className="payment-header">
          <div>
            <h2>Payment Control</h2>
            <p className="subtitle">Payment Escrow Status & Approvals</p>
          </div>
          <div className="profile-icon">👤</div>
        </div>

        <div className="payment-layout">
          {/* LEFT LIST */}
          <div className="payment-list">
            {payments.map((p, i) => (
              <div className="payment-card" key={i}>
                <div>
                  <h4>{p.title}</h4>
                  <p>
                    Freelancer: {p.freelancer} · {p.date}
                  </p>
                </div>

                <div className="payment-right">
                  <strong>${p.amount.toLocaleString()}</strong>

                  <span className={`status ${p.status.toLowerCase()}`}>
                    {p.status}
                  </span>

                  {p.status === "Pending" && (
                    <>
                      <button className="approve">Approve</button>
                      <button className="hold">Hold</button>
                    </>
                  )}

                  {p.status === "Approved" && (
                    <button className="release">Release</button>
                  )}

                  {p.status === "Disputed" && (
                    <button className="review">Review</button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="overview">
            <div className="overview-card">
              <p>Total in Escrow</p>
              <h3>$15,000</h3>
              <span>Across 6 transactions</span>
            </div>

            <div className="overview-card">
              <p>Pending Approvals</p>
              <h3>2</h3>
              <span>Awaiting review</span>
            </div>

            <div className="overview-card">
              <p>Active Disputes</p>
              <h3>1</h3>
              <span>Requires attention</span>
            </div>

            <div className="note">
              All payment actions are logged and auditable. Disputes must be
              resolved within 7 business days.
            </div>

            <button className="secondary-btn">View All Transactions</button>
          </div>
        </div>
      </main>
    </div>
  );
}
