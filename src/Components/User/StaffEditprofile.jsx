import React, { useState } from "react";
import "./Staffprofile.css";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import axios from "axios";
import wh from "../images/wh.jpg";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { AiTwotoneStar, AiOutlineCheck } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
export default function StaffProfile() {
  const [user, setUser] = useState([]);
  async function GetUsers() {
    try {
      const response = await axios.get("https://ayakart.dauqu.com/api/profile", {
        withCredentials: true,
      });
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    GetUsers();
  }, []);

  // logout funtion--------------------
  async function UserLogut() {
    try {
      const resp = await axios.get("https://ayakart.dauqu.com/api/logout", {
        withCredentials: true,
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="mainuserprop">
        <div className="outeruserprop">
          <div className="leftuserprop">
            <div>
              <img src={wh} alt="user" className="userporpimg"></img>
            </div>
          </div>
          <div className="emptysapceprop"></div>
          <div className="rightuserprop">
            <div className="userprophead">
              <div className="userlocaprop">
                <h3>{user.fname}</h3>
                <div className="userpropright">
                  <MdLocationPin className="lociconprop" /> New York, Ny
                </div>
              </div>
              <p className="paraprop">
                Role : {user.role} <BsFillPatchCheckFill className="RIcons" />
              </p>
              <div className="ratingprop">
                <h6>Rating</h6>
                <h5>
                  8.5 <AiTwotoneStar style={{ color: "blue" }} />
                  <AiTwotoneStar style={{ color: "blue" }} />
                  <AiTwotoneStar style={{ color: "blue" }} />
                  <AiTwotoneStar style={{ color: "blue" }} />
                </h5>
              </div>
              <div className="threebtns">
                <div className="parentbtndivprop">
                  <button className="sendmsgbtn">
                    <BiMessageRounded /> Send Message
                  </button>
                </div>
                <div className="parentbtndivprop">
                  <button className="contbtnprop">
                    <AiOutlineCheck /> Contact
                  </button>
                </div>
                <div className="parentbtndivprop">
                  <button className="sendmsgbtn">Report</button>
                </div>
              </div>
              <div className="aboutsecrtion">
                <FaUserAlt />
                <div className="propabout">About</div>
              </div>
              <hr className="hrinfo" />
            </div>
          </div>
        </div>
        <div className="bottomuserprop">
          <div className="bottomleftprop">
            <div>
              <h2>Accessibility</h2>
            </div>
            <div>
              <div className="accprop">
                <h5>Spotify New</h5>{" "}
                <div>
                  <button className="pribtn">Primary</button>
                </div>
              </div>
              <div>
                <p className="ppropbtm">New York William Street</p>
                <p className="ppropbtm">N.Y 1104 #45</p>
              </div>
            </div>
            <div>
              <div className="accprop">
                <h5>Spotify New</h5>{" "}
                <div>
                  <button className="pribtn">Primary</button>
                </div>
              </div>
              <div>
                <p className="ppropbtm">New York William Street</p>
                <p className="ppropbtm">N.Y 1104 #45</p>
              </div>
            </div>
            <div className="lowercontprop">
              <div>
                <h6 className="hsixinfo">
                  Skills <hr className="hrinfo" />
                </h6>
              </div>
              <div className="skilldiv">
                <Link to="/stafeditprod" className="skillparainfo">
                  Edit Product
                </Link>

                <p className="skillparainfo">Branding</p>
                <p className="skillparainfo">Ux/Ui</p>
                <Link to="/addproduct" className="skillparainfo">
                  Add Product
                </Link>
              </div>
            </div>
          </div>
          <div className="emptysapceprop"></div>

          <div className="bottomrightprop">
            <div className="cinfoprop">Contact Information</div>
            <div className="infoprop">
              <div className="leftinfoprop">
                <h6 className="headingcontinfo">Phone :</h6>
              </div>
              <div className="rightinofprop">
                <h6>
                  <input></input>
                </h6>
              </div>
            </div>
            <div className="infoprop">
              <div className="leftinfoprop">
                <h6 className="headingcontinfo">Email :</h6>
              </div>
              <div className="rightinofprop">
                <h6>
                  <input></input>
                </h6>
              </div>
            </div>
            <div className="infoprop">
              <div className="leftinfoprop">
                <h6 className="headingcontinfo">Name :</h6>
              </div>
              <div className="rightinofprop">
                <h6>
                  <input></input>
                </h6>
              </div>
            </div>
            <div className="infoprop">
              <div className="leftinfoprop">
                <h6 className="headingcontinfo">Address :</h6>
              </div>
              <div className="rightinofprop">
                <h6>
                  <input></input>
                </h6>
              </div>
            </div>
            <div className="infoprop">
              <div className="leftinfoprop">
                <h6 className="headingcontinfo">Passsword :</h6>
              </div>
              <div className="rightinofprop">
                <h6>
                  <input></input>
                </h6>
              </div>
            </div>
            <button className="upbtn">Update</button>
            <div className="basicinfodiv">Basic Information</div>
            <div className="infoprop">
              <div className="leftinfoprop">
                <h6 className="headingcontinfo">Address :</h6>
              </div>
              <div className="rightinofprop">
                <h6>New York East #5654 Fr-4</h6>
              </div>
            </div>
            <div className="infoprop">
              <div className="leftinfoprop">
                <h6 className="headingcontinfo">Address :</h6>
              </div>
              <div className="rightinofprop">
                <h6>New York East #5654 Fr-4</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
