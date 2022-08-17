import React from "react";
import TotalView from "../Cart/TotalView";
import "./checkout.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Checkout() {
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
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                sx={{ marginLeft: 3 }}
              />
            </div>
            {/* pincode */}
            <div className="txtfldinp">
              <TextField
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
                size="small"
              />

              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
                size="small"
                sx={{ marginLeft: 3 }}
              />
            </div>
            <div className="txtfldinp">
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-basic"
                label="State"
                variant="outlined"
                size="small"
                sx={{ marginLeft: 3 }}
              />
            </div>
            <div className="txtfldinp">
              <TextField
                id="outlined-basic"
                label="Address_One"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-basic"
                label="Address_Two"
                variant="outlined"
                size="small"
                sx={{ marginLeft: 3 }}
              />
            </div>

            <div className="btnofdev">
              <button className="delbtn">Save And Deliver Here</button>
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
