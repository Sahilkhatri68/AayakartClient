import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";

import "./profile.css";

export default function Profile() {
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>User Profile Card</h2>
        <div className="card">
          <img
            src="https://www.w3schools.com/w3images/team2.jpg"
            alt="John"
            style={{ width: "100%" }}
          />
          <h1>John Doe</h1>
          <p className="title">CEO &amp; Founder, Example</p>
          <p>Harvard University</p>
          <div style={{ margin: "24px 0" }}>
            <a href="#">
              <i className="fa fa-dribbble" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-linkedin" />
            </a>
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </div>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
    </>
  );
}
