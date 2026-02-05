import React, { useState } from "react";
import Background from "./../../background/Background";
import Style from "../loginForm/login.module.css";
import { useDispatch } from "react-redux";
import { sendEmailData } from "../../redux/thunk/authThunk";

const EmailVerfication = () => {
  let [email, setEmail] = useState({
    emailValue: "",
  });
  let dispatch = useDispatch();
  let handleChange = (e) => {
    let { name, value } = e.target;
    setEmail({ [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Fill the field");
    } else {
      console.log(email);
      dispatch(sendEmailData(email));
    }
  };

  let emailValue = () => {
    return (
      <form action="" className={Style.form} onSubmit={handleSubmit}>
        <aside>
          <input
            type="text"
            placeholder="Enter Registered Email"
            name="emailValue"
            value={email.emailValue}
            onChange={handleChange}
          />
        </aside>
        <aside>
          <button>Get Verification Link</button>
        </aside>
      </form>
    );
  };
  return (
    <>
      <Background data={emailValue} />
    </>
  );
};

export default EmailVerfication;
