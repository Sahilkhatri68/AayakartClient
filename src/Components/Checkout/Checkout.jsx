import React from "react";
import TotalView from "../Cart/TotalView";
import "./checkout.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

export default function Checkout() {
  // getting user details for payement

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [address_one, setAddress_one] = useState("");
  const [address_two, setAddress_two] = useState("");

  async function PostOrder() {
    const resp = await axios
      .post("http://localhost:4000/api/orders", {
        name: name,
        email: email,
        pincode: pincode,
        city: city,
        country: country,
        state: state,
        address_one: address_one,
        address_two: address_two,
      })
      .then(function (response) {
        console.log(response);
        Swal.fire("Order Placed!", "Good job!", "success");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div className="maincheckout">
        <div className="leftcheck">
          <div className="deliverydivchk">Delivery Address</div>
          <div className="addressform">
            <div className="txtfldinp">
              {/* Number */}
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                name={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                sx={{ marginLeft: 3 }}
                name={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* pincode */}
            <div className="txtfldinp">
              <TextField
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
                size="small"
                name={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
              />

              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
                size="small"
                sx={{ marginLeft: 3 }}
                name={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            <div className="txtfldinp">
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                size="small"
                name={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <TextField
                id="outlined-basic"
                label="State"
                variant="outlined"
                size="small"
                sx={{ marginLeft: 3 }}
                name={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            <div className="txtfldinp">
              <TextField
                id="outlined-basic"
                label="Address_One"
                variant="outlined"
                size="small"
                name={address_one}
                onChange={(e) => setAddress_one(e.target.value)}
                required
              />
              <TextField
                id="outlined-basic"
                label="Address_Two"
                variant="outlined"
                size="small"
                sx={{ marginLeft: 3 }}
                name={address_two}
                onChange={(e) => setAddress_two(e.target.value)}
                required
              />
            </div>

            <div className="btnofdev">
              <button className="delbtn" onClick={() => PostOrder()}>
                Save And Deliver Here
              </button>
            </div>
          </div>
        </div>
        <div className="rightcheck">
          <TotalView />
        </div>
      </div>
    </>
  );
}
