import FacebookIcon from "@mui/icons-material/Facebook";
import emailjs from "@emailjs/browser"
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

import React, { useRef, useState } from "react";
import "./contact.scss";





const Contact = () => {

  const [name, setName]  = useState("")
  const [email, setEmail]  = useState("")
  const [subject, setSubject]  = useState("")
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 3000);


    emailjs.sendForm('service_jlh2d9r', 'template_47ckpmv', form.current, 'GulTpP5BOfxzqtumu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };




  

  return (
    <div className="contact">

      <h1 className="get-in-touch">GET IN TOUCH </h1>
      <h1 className="hey-star"> Hey Star 🤩, we are happy you are here <br /> and we appreciate your valuable feedback.</h1>

       <form  
       ref={form}
       onSubmit={sendEmail}
         
          > 
            <input  type="text" placeholder='Name' name='user_name' value={name}  onChange={(e) => setName(e.target.value)} />
            <input  type="text" placeholder='Subject' name='user_subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
            <input  type="email" placeholder='Email' name='user_email'  value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea  name="message" placeholder='Message' rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button >
              Send feedback
            </button>
          </form>
          {showMessage && (
            <div className="popup">
              <p>Hey Star 🤩 Thanks for giving  <br /> us your feedback you rock ! </p>

            </div>
          )}

          <div className="socials">
            <h1 className="get-in-touch">FOLLOW US ON SOCIAL MEDIA</h1>

            <ul>
             
              <li>
                <a href="https://twitter.com/OrtenticNigeria"
                target={"_blank"}
                >
                 <FaTwitter />
                </a>
              </li>

              <li>
              <a href="https://www.instagram.com/ortenticnigeria/"
              target={"_blank"}
              >
              <FaInstagram />
              </a>

              </li>

              <li>
              <a href="#"
              target={"_blank"}
              >
              <FaFacebook />
              </a>
              </li>

              <li>
              <a href="#"
              target={"_blank"}
              >
              <FaTiktok />
              </a>
              </li>

              <li>
              <a href="#"
              target={"_blank"}
              >
              <FaYoutube />
              </a>
              </li>
            
            </ul>

          </div>
      
    </div>
  );
};


export default Contact;
