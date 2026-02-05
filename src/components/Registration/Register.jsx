import React, { useState } from "react";
import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import Background from "../background/Background";
import { createUser } from "../redux/thunk/authThunk";
import { useDispatch } from "react-redux";

export default function Register() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companySize: "",
    primaryStack: "",
    password: "",
    confirmPassword: "",
    agree: false,
    acknowledgement: false,
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [errors, setErrors] = useState({});

  let dispatch = useDispatch();
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.companyName.trim())
      newErrors.companyName = "Company Name is mandatory";
    if (!formData.companyEmail.trim())
      newErrors.companyEmail = "Email is mandatory";
    if (!formData.companySize)
      newErrors.companySize = "Company Size is mandatory";
    if (!formData.primaryStack.trim())
      newErrors.primaryStack = "Primary Stack is mandatory";
    if (!formData.password) newErrors.password = "Password is mandatory";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is mandatory";

    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agree) newErrors.agree = "You must agree to Terms & NDA";
    if (!formData.acknowledgement)
      newErrors.acknowledgement = "Acknowledgement required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    } else {
      navigate("/app/addAddress", { state: formData });
      console.log("Form Data Submitted:", formData);
    }
  };

  let registerFormData = () => {
    return (
      <form className="register-card" onSubmit={handleSubmit}>
        {errors.companyName && <p className="error">{errors.companyName}</p>}

        <input
          type="text"
          placeholder="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Company Mail ID"
          name="companyEmail"
          value={formData.companyEmail}
          onChange={handleChange}
        />

        <select
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
        >
          <option value="">Company Size</option>
          <option value="1-10">1–10</option>
          <option value="11-50">11–50</option>
          <option value="51-200">51–200</option>
          <option value="200+">200+</option>
        </select>

        <input
          type="text"
          placeholder="Add Primary primaryStack"
          name="primaryStack"
          value={formData.primaryStack}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <p className="info-text">
          CEO/HR/Admin access only. Employees access through internal company
          dashboard*
        </p>

        <label className="checkbox-row">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <span>I agree to the terms and NDA (Non Disclosure Agreement)</span>
        </label>
        <label className="checkbox-row">
          <input
            type="checkbox"
            name="acknowledgement"
            checked={formData.acknowledgement}
            onChange={handleChange}
          />
          <span>I agree to the acknowledgement.</span>
        </label>

        <p className="login-text">
          Already have an account?{" "}
          <NavLink to="/app">
            <span>LOG IN</span>
          </NavLink>
        </p>

        <button type="submit" className="next-btn">
          Next
        </button>
      </form>
    );
  };
  return <Background data={registerFormData} heading_data={"Registration"} />;
}
