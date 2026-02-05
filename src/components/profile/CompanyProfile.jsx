import React, { useEffect, useState } from "react";
import "./CompanyProfile.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/thunk/authThunk";

export default function CompanyProfile() {
  let companyData = useSelector((state) => state.auth?.userData);
  console.log(companyData);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);
  let handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem("token");
    window.location.href = "/app"; // Redirect to login page
  };

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  return (
    <div className="cpRoot">
      <div className="cpMain">
        {/* HEADER */}
        <div className="cpHeader">
          <div>
            <h1 className="cpTitle">Company Profile</h1>
            <p className="cpSubtitle">
              Manage your company information and team
            </p>
          </div>
        </div>

        {/* COMPANY CARD */}
        <div className="cpCompanyCard">
          <div className="cpCompanyTop">
            <h2 className="cpCompanyName">
              {companyData?.companyName}
              {companyData?.verified && (
                <span className="cpVerifiedBadge">✔ Verified</span>
              )}
            </h2>
            <p className="cpCompanyDesc">{companyData?.aboutCompany}</p>
          </div>

          <div className="cpCompanyMeta">
            <span>💻 Software Development</span>
            <span>📍 {companyData?.address}</span>
            <span>👥 {companyData?.members}</span>
            <span>🔗 {companyData?.website}</span>
          </div>
        </div>

        {/* STATS */}
        <div className="cpStatsGrid">
          <div className="cpStatBox">
            <p>Team Members</p>
            <h2>67</h2>
          </div>

          <div className="cpStatBox">
            <p>Task Completed</p>
            <h2>234</h2>
            <span className="cpPositive">+12% from last month</span>
          </div>

          <div className="cpStatBox">
            <p>Total Earnings</p>
            <h2>₹ 20,00,000</h2>
            <span className="cpPositive">+12% from last month</span>
          </div>
        </div>

        {/* QUICK ACTION — CENTERED */}
        <div className="cpQuickActions">
          <div className="cpActionCenter">
            <button className="cpEditBtn">
              <NavLink
                to="/app/DashboardLayout/edit-company-profile"
                state={companyData}
              >
                Update Company Info
              </NavLink>
            </button>
          </div>
        </div>

        {/* BOTTOM RIGHT LOGOUT BUTTON */}
        <button
          className="cpBottomLogout"
          onClick={() => setShowLogoutPopup(true)}
        >
          Log Out
        </button>
      </div>

      {/* LOGOUT MODAL */}
      {showLogoutPopup && (
        <div className="cpModalOverlay">
          <div className="cpLogoutModal">
            <h2>Are you sure you want to log out?</h2>
            <p>You will be signed out and redirected to the login page.</p>

            <div className="cpLogoutActions">
              <button
                className="cpCancelBtn"
                onClick={() => setShowLogoutPopup(false)}
              >
                Cancel
              </button>

              <button className="cpConfirmBtn" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
