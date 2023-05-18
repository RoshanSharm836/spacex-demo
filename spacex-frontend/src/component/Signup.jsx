import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signupApi } from "../Axios/user";

function Signup() {
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
    signupApi(data)
      .then((res) => {
        alert("signup done!");
        navigate("/");
      })
      .catch((err) => {
        alert("invalid email");
      });
  };
  return (
    <>
      {/* <img src="./suit.svg" alt="" /> */}
      <form className="login">
        <div className="login_box">
          <h1 className="heading">Signup</h1>
          <br />
          <br />
          <br />
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handlechange} />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handlechange} />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handlechange}
            required
          />

          <button className="button-23" onClick={handlesubmit}>
            Submit
          </button>
          <br />

          <NavLink to={"/"}>
            <span>login</span>
          </NavLink>
        </div>
      </form>
    </>
  );
}

export default Signup;
