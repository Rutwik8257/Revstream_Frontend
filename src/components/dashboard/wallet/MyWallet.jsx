import React, { useEffect, useState } from "react";
import "./MyWallet.css";
import AddMoney from "./AddMoney";
import { useDispatch, useSelector } from "react-redux";
import {
  getWalletData,
  withdrawMoneyToAccount,
} from "../../redux/thunk/moneyThunk";

export default function MyWallet() {
  const [popup, setPopup] = useState(null);
  const [value, setAmount] = useState({ amount: "" });

  const dispatch = useDispatch();

  const wallet = useSelector((state) => state.wallet.wallet.wallet?.balance);

  let transactions = useSelector((state) => state.wallet.transactions);

  const loading = useSelector((state) => state.wallet.loading);

  useEffect(() => {
    dispatch(getWalletData());
  }, []);

  const closePopup = () => {
    setPopup(null);
    setAmount({ amount: "" });
  };

  const handleWithdraw = () => {
    dispatch(withdrawMoneyToAccount({ amount: value.amount }));
    closePopup();
  };

  return (
    <div className="wallet-root">
      <div className="wallet-main">
        <h2>My Wallet</h2>

        <div className="wallet-top-grid">
          <div className="wallet-card wallet-wide">
            <p>Total Wallet Balance</p>
            <h3>₹ {wallet}</h3>
          </div>

          <div
            className="wallet-action wallet-purple"
            onClick={() => setPopup("add")}
          >
            Add Money
          </div>

          <div
            className="wallet-action wallet-green"
            onClick={() => setPopup("withdraw")}
          >
            Withdraw
          </div>
        </div>

        <div className="wallet-card wallet-activity">
          <h4>Recent Activity</h4>

          {transactions?.length === 0 ? (
            <p className="empty">No transactions yet</p>
          ) : (
            transactions?.map((t, i) => (
              <div className="wallet-activity-row" key={i}>
                <div>
                  <strong>{t.description}</strong>
                  <p>{t.type}</p>
                </div>
                <div className="wallet-right">
                  <p>
                    <strong>Amount: ₹{t.amount}</strong>
                  </p>
                  <p>Status: {t.status}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {popup && (
        <div className="wallet-overlay">
          <div className="wallet-popup">
            <h4>{popup === "add" ? "Add Money" : "Withdraw Money"}</h4>

            <input
              type="number"
              step="0.01"
              placeholder="Enter amount (100.00)"
              value={value.amount}
              onChange={(e) =>
                setAmount({ amount: Number(e.target.value) || 0.0 })
              }
            />

            {popup === "add" ? (
              <AddMoney addAmountValue={value.amount} />
            ) : (
              <button disabled={loading} onClick={handleWithdraw}>
                {loading ? "Processing..." : "Withdraw"}
              </button>
            )}

            <button className="cancel" onClick={closePopup}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
