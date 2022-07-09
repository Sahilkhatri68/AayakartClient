import React from "react";
import "./seller.css";
// import growth from "../images/growth.jpg";
import bgbanner from "../images/bannerBg.png";
import { Link } from "react-router-dom";

export default function Seller() {
  return (
    <>
      <div>
        <div className="cont">
          <img className="bgbanner" src={bgbanner} alt="banner"></img>
        </div>
        <div className="midbanner">
          <h1>Sell your product's here! & get money</h1>
        </div>
        <div className="people">
          <Link to="/Enroll">
            <button className="enroll">Enroll Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}
