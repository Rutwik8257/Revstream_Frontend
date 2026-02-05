import React, { useState } from "react";
import "./internalTaskBoard.css";
import { Outlet, useNavigate } from "react-router-dom";

export default function InternalTaskBoard() {
  const [activeTab, setActiveTab] = useState("Active");
  const tabs = [
    { name: "Active", count: 0, path: "." },
    { name: "Due Today", count: 0, path: "dueToday" },
    { name: "Completed", count: 0, path: "completedDue" },
    { name: "Under Review", count: 0, path: "underReview" },
  ];

  let navigate = useNavigate();
  let navigateFunction = (pathValue) => {
    navigate(pathValue);
  };
  return (
    <div className="board-root">
      {/* MAIN */}
      <main className="main">
        <h2>Welcome Jenizo 👋</h2>
        <p className="subtitle">Congratulations on another productive week!</p>

        <input className="search" placeholder="Search tasks..." />

        {/* TABS */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={activeTab === tab.name ? "tab active" : "tab"}
              onClick={() => {
                setActiveTab(tab.name);
                navigateFunction(tab.path);
              }}
            >
              {tab.name} [{tab.count}]
            </button>
          ))}
        </div>

        <Outlet />
      </main>
    </div>
  );
}
