import React, { useState } from "react";
import "./WithdrawAmount.css";

export default function WithdrawAmount() {
  const [balance] = useState(20000);
  const [amount, setAmount] = useState("");
  const [selectedCard, setSelectedCard] = useState("Visa ••••4532");

  const [showConfirm, setShowConfirm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const withdrawAll = () => {
    setAmount(balance);
  };

  const submitWithdraw = () => {
    if (!amount || amount <= 0) {
      alert("Enter a valid amount");
      return;
    }
    setShowConfirm(true);
  };

  const confirmWithdraw = () => {
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setShowConfirm(false);
      setShowSuccess(true);
    }, 2000);
  };

  return (
    <div className="withdraw-root">

      <main className="main">
        {/* HEADER */}
        <div className="header">
          <div>
            <h2>Withdraw Amount</h2>
            <p className="subtitle">
              Transfer money to your bank account
            </p>
          </div>
          <div className="profile-icon">👤</div>
        </div>

        {/* BALANCE */}
        <div className="balance-card">
          <div>
            <p className="label">Available Balance</p>
            <h3>₹ {balance}</h3>
          </div>
          <button className="withdraw-all" onClick={withdrawAll}>
            Withdraw all
          </button>
        </div>

        {/* AMOUNT */}
        <div className="field">
          <label>Amount to withdraw</label>
          <div className="amount-input">
            <span>₹</span>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        {/* CARD */}
        <div className="field">
          <label>Select Payout Card</label>

          <div
            className={`card-option ${
              selectedCard.includes("Visa") ? "active" : ""
            }`}
            onClick={() => setSelectedCard("Visa ••••4532")}
          >
            <strong>Visa ••••4532</strong>
            <span>John Doe</span>
          </div>

          <div
            className={`card-option ${
              selectedCard.includes("Master") ? "active" : ""
            }`}
            onClick={() => setSelectedCard("Master card ••••4532")}
          >
            <strong>Master card ••••4532</strong>
            <span>John Doe</span>
          </div>
        </div>

        <button className="withdraw-btn" onClick={submitWithdraw}>
          Withdraw
        </button>
      </main>

      {/* ================= CONFIRM / PROCESS POPUP ================= */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <h3>Confirm Withdrawal</h3>
            <p className="modal-sub">
              Please review your withdrawal details
            </p>

            <div className="modal-row">
              <span>Withdraw Amount</span>
              <strong>₹ {amount}</strong>
            </div>

            <div className="modal-row">
              <span>Selected card</span>
              <strong>{selectedCard}</strong>
            </div>

            <div className="modal-row">
              <span>Platform Fee</span>
              <strong>₹ 0.00</strong>
            </div>

            <div className="modal-divider" />

            <div className="modal-row total">
              <span>Net Receivable</span>
              <strong className="green">₹ {amount}</strong>
            </div>

            <p className="modal-note">
              Estimated transfer time: 1–3 Business Days
            </p>

            <div className="modal-actions">
              {!isProcessing ? (
                <>
                  <button
                    className="cancel-btn"
                    onClick={() => setShowConfirm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="confirm-btn"
                    onClick={confirmWithdraw}
                  >
                    Withdraw
                  </button>
                </>
              ) : (
                <button className="processing-btn" disabled>
                  Processing...
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= SUCCESS POPUP ================= */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="success-modal">
            <div className="success-icon">✅</div>

            <h3>Withdrawal Initiated!</h3>
            <p className="success-sub">
              Your Withdrawal of ₹ {amount} is being processed
            </p>

            <p className="reference">
              Reference ID: <span>WD{Date.now()}</span>
            </p>

            <button
              className="history-btn"
              onClick={() => setShowSuccess(false)}
            >
              View withdrawal history
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
