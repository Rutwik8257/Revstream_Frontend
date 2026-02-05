import React, { useState } from "react";
import "./AddNewCard.css";

export default function AddNewCard() {
  const [form, setForm] = useState({
    name: "John Doe",
    number: "",
    expiry: "",
    cvv: "",
    country: "India",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addCard = () => {
    if (!form.number || !form.expiry || !form.cvv) {
      alert("Please fill all card details");
      return;
    }

    // ✅ SHOW SUCCESS POPUP
    setShowSuccess(true);
  };

  return (
    <div className="addcard-root">
      {/* EMPTY SIDEBAR SPACE */}
      <div className="sidebar-spacer" />

      <main className="main">
        {/* HEADER */}
        <div className="header">
          <div>
            <p className="back">← Back to cards</p>
            <h2>Add New Card</h2>
            <p className="subtitle">
              Add new payout method to your account
            </p>
          </div>
          <div className="profile-icon">👤</div>
        </div>

        {/* CARD PREVIEW */}
        <div className="card-preview">
          <span className="default-badge">★ Default</span>

          <div className="dots">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="card-info">
            <p className="label">CARD HOLDER</p>
            <strong>{form.name || "John Doe"}</strong>
          </div>

          <div className="card-bottom">
            <span>•••• {form.number.slice(-4) || "7654"}</span>
            <span>EXPRES {form.expiry || "12/27"}</span>
          </div>
        </div>

        {/* FORM */}
        <div className="form">
          <div className="field">
            <label>Card Holders Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div className="field">
            <label>Card Number</label>
            <input
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="1234 5678 7654"
            />
          </div>

          <div className="row">
            <div className="field">
              <label>Expiry Date</label>
              <input
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
              />
            </div>

            <div className="field">
              <label>CVV</label>
              <input
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                placeholder="•••"
              />
            </div>
          </div>

          <div className="field">
            <label>Billing Country</label>
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* SECURITY NOTE */}
        <div className="secure-note">
          ✔ Your payment methods are secure
          <span>
            All card details are encrypted using industry-standard security,
            we never store your full card number.
          </span>
        </div>

        {/* ADD CARD BUTTON */}
        <button className="add-btn" onClick={addCard}>
          Add Card
        </button>
      </main>

      {/* ================= SUCCESS POPUP ================= */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="success-modal">
            <div className="success-icon">✅</div>

            <h3>Card Added Successfully</h3>
            <p className="success-sub">
              Your new card ending in{" "}
              <strong>{form.number.slice(-4)}</strong> has been added
            </p>

            <p className="success-link">
              Set as your default payment method
            </p>

            <div className="success-actions">
              <button
                className="secondary-btn"
                onClick={() => setShowSuccess(false)}
              >
                Back to cards
              </button>

              <button className="primary-btn">
                Go to wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
