import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
          look ASAP! Terms and conditions apply.
        </p>
      </div>
      <footer>
        <div className="footer-wrap">
          <div className="wrapperrr">
            <div className="content">
              <div className="about">About</div>
              <a href="" className="links">
                Contact us
              </a>
              <a href="" className="links">
                About us
              </a>
              <a href="" className="links">
                Careers
              </a>
              <a href="" className="links">
                abc
              </a>
            </div>
            <div className="content">
              <div className="about">Help</div>
              <a href="" className="links">
                Payement
              </a>
              <a href="" className="links">
                Shipping
              </a>
              <a href="" className="links">
                Returns
              </a>
              <a href="" className="links">
                FAQ'S
              </a>
            </div>
            <div className="content">
              <div className="about">Policy</div>
              <a href="" className="links">
                Terms of use
              </a>
              <a href="" className="links">
                Sitemap
              </a>
              <a href="" className="links">
                Return Policy
              </a>
              <a href="" className="links">
                Shipping
              </a>
            </div>
            <div className="content">
              <div className="about">Social</div>
              <a href="" className="links">
                Facebook
              </a>
              <a href="" className="links">
                Twitter
              </a>
              <a href="" className="links">
                Instagram
              </a>
              <a href="" className="links">
                WhatsApp
              </a>
            </div>
            <div className="linespace" />
            <div className="blank" />
            <div className="mailus">
              <div className="about">Mail us</div>
              <a href="" className="links">
                AayakartprivateLimited@gmail.com
              </a>
              <a href="" className="links">
                AayakartprivateLimited@gmail.com
              </a>
              <a href="" className="links">
                AayakartprivateLimited@gmail.com
              </a>
              <a href="" className="links">
                AayakartprivateLimited@gmail.com
              </a>
            </div>
            <div className="mailus">
              <div className="about">Address</div>
              <a href="" className="links">
                Main market Molekhal (Kapradhya)
              </a>
              <a href="" className="links">
                Near State Bank ,Salt Almora
              </a>
              <a href="" className="links">
                Uttrakhand , 263676
              </a>
              <a href="" className="links">
                India
              </a>
            </div>
          </div>

          <div className="row" style={{ margin: 0 }}>
            <div className="container-fluid">
              <div className="seller">
                <Link to="/seller" style={{ color: "white" }}>
                  <IoBagHandleSharp
                    style={{ height: 20, width: 20, color: "yellow" }}
                  />
                  Become a Seller
                </Link>
              </div>
              <div className="Help">
                <a href="#" style={{ color: "white" }}>
                  <AiFillQuestionCircle
                    style={{ height: 20, width: 20, color: "yellow" }}
                  />
                  Help
                </a>
              </div>
              <div className="">
                <a href="#" style={{ color: "white" }}>
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
