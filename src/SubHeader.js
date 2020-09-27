import React from "react";
import "./SubHeader.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function SubHeader() {
  return (
    <div className="subheader">
      <div className="subheader__left">
        <LocationOnIcon />
        <div className="subheader__leftDelivery">
          <p>Deliver to</p>
          <h3>United Kingdom</h3>
        </div>
      </div>
      <div className="subheader__mid">
        <p>Today's Deal</p>
        <p>Customer Service</p>
        <p>Gift Cards</p>
        <p>Registry</p>
        <p>Sell</p>
      </div>
      <div className="subheader__right">
        <h3>Amazon's Response to COVID-19</h3>
      </div>
    </div>
  );
}

export default SubHeader;
