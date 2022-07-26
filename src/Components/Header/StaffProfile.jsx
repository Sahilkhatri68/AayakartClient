import React from "react";
import "./Staffprofile.css";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

export default function StaffProfile() {
  return (
    <>
      <div className="container emp-profile">
        <div method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
                {/* <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Customer</h5>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-md-2"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Link to="/staffeditprofile">
                <button
                  className="Ebtn"
                  style={{
                    background: "blue",
                    color: "white",
                    textAlign: "center",
                    padding: 4,
                    width: 80,
                    marginRight:4
                  }}
                >
                  Edit
                </button>
              </Link>
              <Link to="/">
                <button
                  className="Ebtn"
                  style={{
                    background: "red",
                    color: "white",
                    textAlign: "center",
                    padding: 4,
                    width: 80,
                  }}
                >
                  <FiPower style={{ color: "white", fontWight: 600 }} /> Logout
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <h3>Accessibilities</h3>
                <Link to="/addproduct">Add Product's</Link>
                <br />
                <Link to="/viewproduct">View Product</Link>

                <br />
                <Link to="/addauction">Add Auction</Link>
                <br />
                <Link to="/viewauction">View Auction</Link>
                <br />
                <Link to="/adduser">Add User</Link>
                <br />
                <Link to="/viewuser">View User's</Link>
                <br />
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>Kshiti123</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Kshiti Ghelani</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>kshitighelani@gmail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>123 456 7890</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web Developer and Designer</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Your Bio</label>
                      <br />
                      <p>Your detail description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
