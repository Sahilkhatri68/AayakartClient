import React from "react";
import Elogin from "../images/login.jpg";
import "./Emptylogin.css";
function EmptyLogin() {
  return (
    <div className="eLoginMain">
      <div className="centerloginE">
        <img src={Elogin} alt="Empty Login" className="loginpic" />
        <h5>Please Login to see profile</h5>
      </div>
    </div>
  );
}

export default EmptyLogin;
