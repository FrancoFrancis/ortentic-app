// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrollToTop.css"

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div >
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          {/* <FontAwesomeIcon icon={faArrowUp} className="top-btn-icon" /> */}
          <span className="top-btn-icon" >
            <FaArrowUp/>
            </span>
        </div>
      )}
    </div>
  );


}

export default ScrollToTop;



