import React from "react";
import { useNavigate } from "react-router-dom";
import "./AccessAndControl.css";

export default function AccessAndControl() {
  const navigate = useNavigate();

  const images = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1551434678-e076c223a692",
    "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="acc-root-wrapper">

      {/* HEADER */}
      <div className="acc-header-section">
        <h1 onClick={() => navigate(-1)}>← Back Access & Control</h1>
        <p>A transparent way to understand how access works inside REVSTREAM</p>
      </div>

      {/* HERO */}
      <div className="acc-hero-card">
        <div className="acc-hero-left">
          <h2>Access made simple</h2>
          <p>
            REVSTREAM ensures the right people have the right access — without
            disrupting productivity or collaboration.
          </p>

          <blockquote>
            “Security should empower teams, not slow them down.”
          </blockquote>

          <div className="acc-inline-note">
            Access policies are applied silently in the background so your team
            can focus on work, not rules.
          </div>
        </div>

        <div className="acc-hero-right">
          <img src={randomImage} alt="Access & control visual" />
        </div>
      </div>

      {/* ACCESS OVERVIEW */}
      <div className="acc-info-card">
        <h3>Who can access REVSTREAM?</h3>

        <div className="acc-role-grid">
          <div className="acc-role-box">
            <span>👑</span>
            <h4>Admins</h4>
            <p>System configuration & approvals</p>
          </div>

          <div className="acc-role-box">
            <span>🧑‍💼</span>
            <h4>Managers</h4>
            <p>Team coordination & task oversight</p>
          </div>

          <div className="acc-role-box">
            <span>👤</span>
            <h4>HR</h4>
            <p>Execute tasks & collaborate</p>
          </div>
        </div>
      </div>

    </div>
  );
}
