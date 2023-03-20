
import React from "react";
import './Footer.scss'

const  Footer = () => {
    return (
        <div className="footer">

            <div className="top">

                <img src="./images/touchy.png"  className="touchy" alt="svg" />
                <div className="item">
                    
                    <h1>Categories
                    <span className="design"></span>
                    </h1>
                    <span>Men</span>
                    <span>Women</span>
                    <span>Shoes</span>
                    <span>Hoddies</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Quick Links
                    <span className="design"></span>
                    </h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    
                    <h1>About
                    <span className="design"></span>
                    </h1>
                    <span>
                        Ortentic is an e-commerce platform <br /> that ensure its customers
                        are always satisfied
                         <br />we do what we do in an exceptional and stylish manner.
                    </span>
                </div>
                <div className="item">
                    
                    <h1>Contact
                    <span className="design"></span>
                    </h1>
                    <span>
                        Contact ortentic team through the following channels
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Ortentic✔</span>
                    <span className="copyright"> © 2023 Developed by Francis</span>
                </div>
                <div className="right">
                    <img src="/images/payment.png" alt="" />
                </div>
                
            </div>
        </div>
    )
}

export default Footer
