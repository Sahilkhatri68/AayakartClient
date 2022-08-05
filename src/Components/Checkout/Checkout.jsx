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
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Number"
                variant="outlined"
                sx={{ marginLeft: 3 }}
              />
            </div>
            <div className="txtfldinp">
              <TextField
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Locality"
                variant="outlined"
                sx={{ marginLeft: 3 }}
              />
            </div>
            <div className="txtfldinp">
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Locality"
                variant="outlined"
                sx={{ marginLeft: 3 }}
              />
            </div>
            <div className="btnofdev">
              <button className="delbtn">
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
