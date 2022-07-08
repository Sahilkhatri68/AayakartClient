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
          <h1>Sell your product's here! </h1>
        </div>
        <div className="people">
          <div className="insidePeople">
            <div className="imagepeople">
              {/* <img className="moneyimg" src={growth}></img> */}
              <h1>& get money</h1> 
              <button className="enroll">Enroll Now</button>
            </div>
          </div>
          <div className="normalbanner"></div>
        </div>
      </div>
    </>
  );
}
