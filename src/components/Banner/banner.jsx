import React from "react";
import "./banner.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./textanimation.scss"
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const Banner = () => {

    return (
        <div className="banner"  >
            <div className="container">
                    <h1 className="brief"> <span className="grade-A"> Grade A </span> thrift clothing <br />
                    and second new London used items.</h1>

                    <p>  On Ortentic you will find  grade A thrift clothing <br />
                    and a wide variety of second new London used items</p>

                    <button>
                        <h5>Explore Shop</h5>
                        
                        <KeyboardArrowDown/>
                    </button>

                    <img src="./images/shoppers.jpg" className="shoppers" alt="" />
                    <img src="./images/shoppers.jpg" className="shoppers2" alt="" />
            </div>
        </div>
    )
}


export default Banner