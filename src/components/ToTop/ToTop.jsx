

import React from 'react'
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import "./ToTop.scss"


const GoToTop = () => {
  const GoToTopBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  };


  return(
    <div className="wrapper">
      <div className="top-btn" onClick={GoToTopBtn}>
      <KeyboardArrowUp className='top-btn-icon'/>
      </div>
    </div>
  )
};



export default GoToTop