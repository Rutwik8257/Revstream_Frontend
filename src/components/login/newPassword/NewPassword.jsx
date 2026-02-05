import React, { useState } from "react";
import Style from "../loginForm/login.module.css";
import Background from "./../../background/Background";

const NewPassword = () => {
  let [passwordDetails, setPasswordDetails] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  let { newPassword, confirmPassword } = passwordDetails;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setPasswordDetails({ ...passwordDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      console.log(passwordDetails);
    } else {
      alert("Password Mismatch");
    }
  };
  let newPasswordValue = () => {
    return (
      <form action="" className={Style.form} onSubmit={handleSubmit}>
        <aside>
          <input
            type="text"
            placeholder="Enter New Password"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Confirm New Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </aside>
        <aside>
          <button>Submit</button>
        </aside>
      </form>
    );
  };
  return (
    <>
      <Background data={newPasswordValue} />
    </>
  );
};

export default NewPassword;
