import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Signup from "./Signup";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<App />} />{" "}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default Allroutes;
