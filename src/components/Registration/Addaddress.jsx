import React, { use, useState } from "react";
import "./Addaddress.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Background from "../background/Background";
import { useDispatch, useSelector } from "react-redux";
import { addAddressData, createUser } from "../redux/thunk/authThunk";

export default function AddAddress() {
  let navigate = useNavigate();
  let { state } = useLocation();
  let userId = useSelector((state) => state.auth.userId);
  // console.log(userId);
  // console.log(state);
  const [addressData, setAddressData] = useState({
    building: "",
    street: "",
    city: "",
    district: "",
    pinCode: "",
    country: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setAddressData({
      ...addressData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [errors, setErrors] = useState({});

  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!addressData.building.trim())
      newErrors.building = "Building is mandatory";
    if (!addressData.street.trim()) newErrors.street = "Street is mandatory";
    if (!addressData.city.trim()) newErrors.city = "City is mandatory";
    if (!addressData.district.trim())
      newErrors.district = "District is mandatory";
    if (!addressData.pinCode.trim())
      newErrors.pinCode = "Pin Code is mandatory";
    if (!addressData.country.trim()) newErrors.country = "Country is mandatory";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    else {
      console.log("Address Submitted:", addressData);
      let formData = { ...state, ...addressData };
      dispatch(createUser(formData));
      navigate("/app");
    }
  };

  let addAddressDataForm = () => {
    return (
      <form className="address-card" onSubmit={handleSubmit}>
        {errors.building && <p className="error">{errors.building}</p>}

        <input
          type="text"
          placeholder="Building Name / Floor"
          name="building"
          value={addressData.building}
          onChange={handleChange}
        />
        {errors.street && <p className="error">{errors.street}</p>}

        <input
          type="text"
          placeholder="Street Name / Lane / road No"
          name="street"
          value={addressData.street}
          onChange={handleChange}
        />
        {errors.city && <p className="error">{errors.city}</p>}

        <input
          type="text"
          placeholder="City / Town"
          name="city"
          value={addressData.city}
          onChange={handleChange}
        />
        {errors.district && <p className="error">{errors.district}</p>}

        <input
          type="text"
          placeholder="District"
          name="district"
          value={addressData.district}
          onChange={handleChange}
        />
        {errors.pinCode && <p className="error">{errors.pinCode}</p>}

        <input
          type="text"
          placeholder="Pin Code"
          name="pinCode"
          value={addressData.pinCode}
          onChange={handleChange}
        />
        {errors.country && <p className="error">{errors.country}</p>}

        <select
          name="country"
          value={addressData.country}
          onChange={handleChange}
        >
          <option value="">Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>

        <p className="login-text">
          Already Signed up?{" "}
          <NavLink to="/login">
            <span>LOG IN</span>
          </NavLink>
        </p>

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    );
  };
  return <Background data={addAddressDataForm} heading_data={"Add Address"} />;
}
