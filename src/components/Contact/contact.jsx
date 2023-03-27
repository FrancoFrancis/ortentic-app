import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import GoogleIcon from "@mui/icons-material/Google";

import React, { useRef } from "react";
import "./contact.scss";





const Contact = () => {




  

  return (
    <div className="contact">

      <h1 className="get-in-touch">GET IN TOUCH </h1>
      <h1 className="hey-star">Hey Star 🤩, we are happy you are here <br /> and we appreciate your valuable feedback.</h1>

       <form  
          // ref={form} 
          // onSubmit={sendEmail}
          > 
            <input  type="text" placeholder='Name' name='user_name' />
            <input  type="text" placeholder='Subject' name='user_subject' />
            <input  type="email" placeholder='Email' name='user_email' />
            <textarea  name="message" placeholder='Message' rows="5"></textarea>
            <button >
              Send feedback
            </button>
          </form>

          <div className="socials">
            <h1 className="get-in-touch">FOLLOW US ON SOCIAL MEDIA</h1>

            <ul>
              <li>
                <i></i>
              </li>
              <li></li>
              <li></li>
              
            </ul>

          </div>
      
    </div>
  );
};


export default Contact;
