import React from "react";
import "./profile.css";
import user from "../images/u3.png";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { SiReadthedocs } from "react-icons/si";
import { FiPower } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <div className="nava">
        <input type="checkbox" id="nava-check" />
        <div className="nava-header">
          <div className="nava-title">JoGeek</div>
        </div>
        <div className="nava-btn">
          <label htmlFor="nava-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nava-links">
          <a href="#" target="_blank">
            <FaShoppingBasket
              style={{
                height: 20,
                width: 20,
                textAlign: "center",
                alignItems: "center",
              }}
            />
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
          <a href="#" target="_blank">
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
          <a href="/" target="_blank">
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
            <h3>User Name</h3>
            <h3>Email</h3>
            <h3>Address</h3>
            <h3>Phone Number</h3>
            <h3>Pin Code</h3>
          </div>
        </div>
      </div>
    </>
  );
}
