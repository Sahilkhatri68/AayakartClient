import React from "react";
import "./Footer.css";
// import aayakartLogo from "../Images/aayakartLogo.png";
import { IoBagHandleSharp } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import Alogo from "../images/AayakartLogo.png";
export default function Footer() {
  return (
    <>
      <div style={{ padding: 30 }}>
        <h3>Aayakart: The One-stop Shopping Destination</h3>
        <p>
          E-commerce is revolutionizing the way we all shop in India. Why do you
          want to hop from one store to another in search of the latest phone
          when you can find it on the Internet in a single click? Not only
          mobiles. aayakart houses everything you can possibly imagine, from
          trending electronics like laptops, tablets, smartphones, and mobile
          accessories to in-vogue fashion staples like shoes, clothing and
          lifestyle accessories; from modern furniture like sofa sets, dining
          tables, and wardrobes to appliances that make your life easy like
          washing machines, TVs, ACs, mixer grinder juicers and other
          time-saving kitchen and small appliances; from home furnishings like
          cushion covers, mattresses and bedsheets to toys and musical
          instruments, we got them all covered. You name it, and you can stay
          assured about finding them all here. For those of you with erratic
          working hours, aayakart is your best bet. Shop in your PJs, at night
          or in the wee hours of the morning. This e-commerce never shuts down.
        </p>

        <h3>No Cost EMI</h3>
        <p>
          In an attempt to make high-end products accessible to all, our No Cost
          EMI plan enables you to shop with us under EMI, without shelling out
          any processing fee. Applicable on select mobiles, laptops, large and
          small appliances, furniture, electronics and watches, you can now shop
          without burning a hole in your pocket. If you've been eyeing a product
          for a long time, chances are it may be up for a no cost EMI. Take a
          look ASAP! Terms and conditions apply.{" "}
        </p>
      </div>
      <footer>
        <div className="footer-wrap">
          <div className="second_class">
            <div className="container second_class_bdr">
              <div className="row" style={{ margin: 0 }}>
                <div className="col-md-4 col-sm-6">
                  <div className="footer-logo">
                    <img
                      src={Alogo}
                      style={{ height: 60, width: 200 }}
                      alt="logo"
                    />
                  </div>
                  <p>
                    Your one-stop career platform to find Jobs, Internships,
                    Professional Trainings, Projects, and Volunteering
                    Opportunities.
                  </p>
                </div>
                <div className="col-md-2 col-sm-6">
                  <h3>About</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Triedge Partners</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h3>Help</h3>
                  <ul className="footer-category">
                    <li>
                      <a href="#">Fresher Jobs</a>
                    </li>
                    <li>
                      <a href="#">InternEdge - Internships &amp; Projects </a>
                    </li>
                    <li>
                      <a href="#">Resume Edge - Resume Writing Services</a>
                    </li>
                    <li>
                      <a href="#">Readers Galleria - Curated Library</a>
                    </li>
                    <li>
                      <a href="#">Trideus - Campus Ambassadors</a>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
                <div className="col-md-3 col-sm-6">
                  <h3>Company Address</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Triedge Events</a>
                    </li>
                    <li>
                      <a href="#">Jobs &amp; Internship Fair 2019</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: 0 }}>
            <div className="container-fluid">
              <div className="seller">
                <a href="#" style={{ color: "white" }}>
                  {" "}
                  <IoBagHandleSharp
                    style={{ height: 20, width: 20, color: "yellow" }}
                  />{" "}
                  Become a Seller{" "}
                </a>
              </div>
              <div className="Help">
                <a href="#" style={{ color: "white" }}>
                  {" "}
                  <AiFillQuestionCircle
                    style={{ height: 20, width: 20, color: "yellow" }}
                  />{" "}
                  Help
                </a>
              </div>
              <div className="">
                <a href="#" style={{ color: "white" }}>
                  {" "}
                  &copy;2020 - 2022 Aayakart
                </a>
              </div>
              <div className="cardpayement">
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
                  className="cardimg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
