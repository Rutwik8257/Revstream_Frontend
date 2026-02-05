
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Background from "../../background/Background";
import Style from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "../../redux/thunk/authThunk";

const Login = () => {
  const [details, setDetails] = useState({
    companyEmail: "",
    password: "",
  });

  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };
  
  let token = useSelector((state=>state.authSlice?.token));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (details.companyEmail === "" || details.password === "") {
      alert("Fill all the fields");

      return;
    }

    if (!agree) {
      alert("Please agree to the Terms & Privacy Policy");
      return;
    }

    try {
      const res = await dispatch(loginData(details));
  
      console.log(res);
      

      if(res.payload.token) {
        navigate("/app/dashboardLayout");
        console.log(token);
      }
    } catch (err) {
      alert(err); // ✅ shows "Invalid email" / "Invalid password"
    }

    setDetails({
      companyEmail: "",
      password: "",
    });
    setAgree(false);
  };

  let formValue = () => {
    return (
      <form onSubmit={handleSubmit} className={Style.form}>
        <aside>
          <input
            type="text"
            name="companyEmail"
            value={details.companyEmail}
            onChange={handleChange}
            placeholder="Company Email ID"
          />

          <input
            type="password"
            name="password"
            value={details.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </aside>

        <aside>
          <NavLink to="lostPassword">Password Lost?</NavLink>
        </aside>

        <aside>
          <p>
            Admin access only. Employees access through internal company
            dashboard
          </p>
        </aside>

        <aside>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span>I agree to the terms & Privacy Policy</span>
        </aside>

        <aside>
          <p>
            Don't have an account? <NavLink to="Registration">Sign Up</NavLink>
          </p>
          <button type="submit">Login</button>
        </aside>
      </form>
    );
  };

  return <Background data={formValue} heading_data={"Login"} />;
};

export default Login;
