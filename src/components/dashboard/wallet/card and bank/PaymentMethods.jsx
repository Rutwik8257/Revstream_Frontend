import React, { useState } from "react";
import "./PaymentMethods.css";

export default function PaymentMethods() {
  const [cards, setCards] = useState([
    {
      id: 1,
      color: "blue",
      holder: "John Doe",
      number: "4563",
      expiry: "12/27",
      default: true,
      verified: true,
    },
    {
      id: 2,
      color: "orange",
      holder: "John Doe",
      number: "4563",
      expiry: "12/27",
      default: false,
      verified: true,
    },
    {
      id: 3,
      color: "green",
      holder: "John Doe",
      number: "4563",
      expiry: "12/27",
      default: false,
      verified: true,
    },
  ]);

  return (
    <div className="payment-root">
      {/* EMPTY SIDEBAR SPACE */}
      <div className="sidebar-spacer" />

      <main className="main">
        {/* HEADER */}
        <div className="header">
          <div>
            <h2>Payment Methods</h2>
            <p className="subtitle">
              Manage your payout cards and bank accounts
            </p>
          </div>

          {/* PROFILE ICON */}
          <div className="profile-icon">👤</div>
        </div>

        {/* CARD GRID */}
        <div className="card-grid">
          {cards.map((card) => (
            <div className={`pay-card ${card.color}`} key={card.id}>
              {card.default && <span className="default-badge">★ Default</span>}

              <div className="dots">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="card-info">
                <p className="label">CARD HOLDER</p>
                <strong>{card.holder}</strong>
              </div>

              <div className="card-bottom">
                <span>•••• {card.number}</span>
                <span>EXPRES {card.expiry}</span>
              </div>

              {card.verified && (
                <span className="verified-badge">✔ Verified</span>
              )}
            </div>
          ))}
        </div>

        {/* ADD NEW CARD */}
        <div className="add-card">
          <div className="plus">＋</div>
          <p>Add New Card</p>
        </div>

        {/* SECURITY NOTE */}
        <div className="secure-note">
          ✔ Your payment methods are secure  
          <span>
            All card details are encrypted using industry-standard security,
            we never store your full card number.
          </span>
        </div>
      </main>
    </div>
  );
}
