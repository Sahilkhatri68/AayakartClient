import React from "react";
import "./seller.css";
// import growth from "../images/growth.jpg";
import bgbanner from "../images/bannerBg.png";
export default function Seller() {
  return (
    <>
      <div>
        <div className="cont">
          <img className="bgbanner" src={bgbanner}></img>
        </div>
        <div className="midbanner">
          <h1>Sell your product's here! & get money</h1>
        </div>
        <div className="people">
          <button className="enroll">Enroll Now</button>
        </div>
      </div>
    </>
  );
}
