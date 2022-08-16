import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Enroll.css";
import Alogo from "../images/ayakartLogo.png";
import Swal from "sweetalert2";
export default function Enroll() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted ✅");
  };

  const [fullname, setFullname] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [location, setLocation] = useState("");
  const postdata = () => {
    axios
      .post("https://apis.chatvait.com/api/register", {
        fullName: fullname,
        username: username,
        phone_number: phone_number,
        password: password,
        confirmPassword: confirmpassword,
        email: email,
        location: location,
      })
      .then(function (response) {
        console.log(response);
        // alert("Vendor Id Created Successfuly");
        Swal.fire({
          icon: "success",
          title: "Good Job!",
          text: "Vendor Account created",
        });
      })
      .catch(function (error) {
        console.log(error);
        // alert("User Already Exist / Missing Details");
        Swal.fire({
          icon: "error",
          title: "Details Missing  / User Already Exists",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Register As a Seller</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker" />
                      </div>
                      <div className="text">
                        <p>
                          <span>Address:</span> Aayakart address
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone" />
                      </div>
                      <div className="text">
                        <p>
                          <span>Phone:</span>{" "}
                          <a href="tel://1234567920">+ 1235 2355 98</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane" />
                      </div>
                      <div className="text">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="/cdn-cgi/l/email-protection#d7beb9b1b897aeb8a2a5a4bea3b2f9b4b8ba">
                            <span
                              className="__cf_email__"
                              data-cfemail="40292e262f00392f3532332934256e232f2d"
                            >
                              [Aayakart@gmail.com]
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe" />
                      </div>
                      <div className="text">
                        <p>
                          <span>Website</span> <a href="#">yoursite.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Contact Us</h3>
                      <div id="form-message-warning" className="mb-4" />
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                        onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="name">
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name={fullname}
                                id="name"
                                placeholder="Name"
                                onChange={(e) => setFullname(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="name">
                                UserName
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="username"
                                onChange={(e) => setusername(e.target.value)}
                                name={username}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="email">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                name={email}
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="email">
                                City
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setLocation(e.target.value)}
                                name={location}
                                id="City"
                                placeholder="City"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="password">
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                                name={password}
                                id="password"
                                placeholder="password"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="password">
                                Confirm Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                onChange={(e) =>
                                  setconfirmpassword(e.target.value)
                                }
                                name={confirmpassword}
                                id="password"
                                placeholder="Re-Enter-password"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="subject">
                                Phone Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Phone"
                                onChange={(e) =>
                                  setphone_number(e.target.value)
                                }
                                name={phone_number}
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <button
                                className="btn btn-primary"
                                onClick={() => postdata()}
                              >
                                Submit
                              </button>
                              <div className="submitting" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-5 img">
                      <img className="Alogos" src={Alogo} alt="Alogo"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
