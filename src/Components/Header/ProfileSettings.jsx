import React from "react";
import "./ProfileSettings.css";
import user from "../images/setting.gif";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { SiReadthedocs } from "react-icons/si";
import { FiPower } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function ProfileSettings() {
  return (
    <>
      <div className="nava">
        <input type="checkbox" id="nava-check" />
        <div className="nava-header">
          <div className="nava-title">User</div>
        </div>
        <div className="nava-btn">
          <label htmlFor="nava-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nava-links">
          <a href="#">
            <FaShoppingBasket
              style={{
                height: 20,
                width: 20,
                textAlign: "center",
                alignItems: "center",
              }}
            />{" "}
            &nbsp; My order
          </a>
          <Link to="/ProfileSettings">
            <MdOutlineSettings
              style={{
                height: 20,
                width: 20,
                textAlign: "center",
                alignItems: "center",
                color: "white",
              }}
            />
            &nbsp; Settings
          </Link>
          <a href="#">
            <SiReadthedocs
              style={{
                height: 20,
                width: 20,
                textAlign: "center",
                alignItems: "center",
                color: "white",
              }}
            />
            &nbsp; History
          </a>
          <a href="/">
            <FiPower
              style={{
                height: 20,
                width: 20,
                textAlign: "center",
                alignItems: "center",
                color: "white",
              }}
            />
            &nbsp; Logout
          </a>
        </div>
      </div>

      <div className="mainuser">
        <div className="userdiv">
          <div className="insideuserdivLeft">
            <div>
              <div className="itemsUser">
                <div className="userImg">
                  <img src={user} alt="img user" className="userI"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="insideuserdivRight">
            <div className="settingsProfile">
              <h3 className="headingUser">User Name</h3>
              <input className="inputtt"></input>
            </div>
            <div className="settingsProfile">
              <h3 className="headingUser">Email</h3>
              <input className="inputtt"></input>
            </div>
            <div className="settingsProfile">
              <h3 className="headingUser">Address</h3>
              <input className="inputtt"></input>
            </div>
            <div className="settingsProfile">
              <h3 className="headingUser">Phone Number</h3>
              <input className="inputtt"></input>
            </div>
            <div className="settingsProfile">
              <h3 className="headingUser">Pin Code</h3>
              <input className="inputtt"></input>
            </div>
            <div className="settingsBtn">
              <button className="changeBtn">Change</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
