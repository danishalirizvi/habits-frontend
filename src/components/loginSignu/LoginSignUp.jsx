import React, { useState } from "react";
import "./LoginSignUp.css";
import {
  MdDriveFileRenameOutline,
  MdOutlineEmail,
  MdOutlinePassword,
} from "react-icons/md";

export const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");
  //   const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <MdDriveFileRenameOutline className="imgs" />
            <input type="text" placeholder="Enter your name here" />
          </div>
        )}
        <div className="input">
          <MdOutlineEmail className="imgs" />
          <input type="email" placeholder="Enter your email here" />
        </div>
        <div className="input">
          <MdOutlinePassword className="imgs" />
          <input type="password" placeholder="Enter your password here" />
        </div>

        {action === "Login" && (
          <div className="forgot-password">
            Forgot Password? <span>Click here!</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit grey" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit grey" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};
