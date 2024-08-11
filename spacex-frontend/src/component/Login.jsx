import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { loginApi } from "../Axios/user";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  let handlesubmit = (e) => {
    e.preventDefault();
    loginApi(data)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("auth-token", token);
        navigate("/");
      })
      .catch((err) => {
        alert("invalid email");
      });
  };
  return (
    <>
      <form className="login">
        <div className="login_box">
          <h1 className="heading">Login</h1>
          <br />
          <br />
          <br />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handlechange} />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handlechange}
          />

          <button className="button-23" onClick={handlesubmit}>
            Submit
          </button>
          <br />

          <NavLink to={"/signup"}>
            <span>Signup</span>
          </NavLink>
        </div>
      </form>
    </>
  );
}

export default Login;
