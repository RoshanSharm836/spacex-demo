import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Private from "./Private";
import Signup from "./Signup";
import Login from "./Login";

function Allroutes() {
  return (
    <div className="container-box ">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <Private>
              <App />
            </Private>
          }
        />{" "}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default Allroutes;
