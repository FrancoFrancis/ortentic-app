import React from "react";
import "./banner.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const Banner = () => {

    return (
        <div className="banner"  >
            <div className="container">
                    <h1 className="brief"> <span className="grade-A"> Grade A thrift clothing and second new London used items. </span>
                    </h1>

                    <p>  On Ortentic you will find  grade A thrift clothing <br />
                    and a wide variety of second new London used items</p>

                    <button>
                        <h4>Explore Shop</h4>
                    
                        <KeyboardArrowDown className="icon"/>
                    </button>

                    <img src="./images/shoppers.jpg" className="shoppers" alt="" />
                    <img src="./images/shoppers.jpg" className="shoppers2" alt="" />
            </div>
        </div>
    )
}


export default Banner