import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span className="in-touch"> GET IN TOUCH  </span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail" />
          <button> JOIN US </button>
        </div>
        <div className="icons">
          <span>
            <FacebookIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <GoogleIcon />
          </span>
        </div>
      </div>
    </div>
  );
};


export default Contact;
