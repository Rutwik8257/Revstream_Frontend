import React, { useState } from "react";
import "./EditCompanyProfile.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCompanyData } from "../redux/thunk/authThunk";

export default function EditCompanyProfile() {
  let { state } = useLocation();
  console.log(state);
  const [form, setForm] = useState({
    companyName: state?.companyName || "",
    address: state?.address || "",
    city: state?.contury || "",
    country: state?.country || "",
    website: state?.website || "",
    contactEmail: state?.contactEmail || "",
    aboutCompany: state?.aboutCompany || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [showSuccess, setShowSuccess] = useState(false);

  let navigate = useNavigate();

  let handleBack = () => {
    navigate(-1);
  };

  let dispatch = useDispatch();

  let handleSubmit = () => {
    // submit form logic here
    dispatch(updateCompanyData(form));
  };

  return (
    <div className="ecp-root">
      {/* EMPTY SIDEBAR SPACE (DO NOT REMOVE) */}
      <div className="ecp-sidebar-space" />

      {/* MAIN CONTENT */}
      <div className="ecp-container">
        {/* HEADER */}
        <div className="ecp-header">
          <div>
            <span className="back-link" onClick={handleBack}>
              ← Back To Overview
            </span>
            <h1>Edit Company Profile</h1>
            <p>Update your company information</p>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="ecp-card">
          {/* LOGO ROW */}
          <div className="logo-row">
            <div className="logo-circle">TF</div>
            <button className="change-logo-btn">Change Logo</button>
          </div>

          {/* FORM FIELDS */}
          <div className="form-group">
            <label>Company Name</label>
            <input
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          <div className="two-col">
            <div className="form-group">
              <label>City</label>
              <input name="city" value={form.city} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="two-col">
            <div className="form-group">
              <label>Website</label>
              <input
                name="website"
                value={form.website}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Contact Email</label>
              <input name="contactEmail" value={form.contactEmail} onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="about-card">
          <label>About The Company</label>
          <textarea
            name="aboutCompany"
            placeholder="Brief description of what your company does..."
            value={form.aboutCompany}
            onChange={handleChange}
          />
        </div>

        {/* ACTIONS */}
        <div className="form-actions">
          <button
            className="primary-btn"
            onClick={() => {
              setShowSuccess(true);
              setTimeout(() => setShowSuccess(false), 2500);
              handleSubmit();
            }}
          >
            Save Changes
          </button>

          <button className="secondary-btn">Cancel</button>
        </div>
      </div>

      {showSuccess && (
        <div className="profile-success-toast">
          <strong>Profile Updated</strong>
          <p>Your company profile has been saved successfully</p>
        </div>
      )}
    </div>
  );
}
