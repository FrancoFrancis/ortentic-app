import React from "react";
import "./banner.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll";
import { FaSearch } from "react-icons/fa";

const Banner = () => {

    return (
        <div className="banner"  >
            <div className="container">


                    <input type="text" value="🔍  What are you looking for? " className="search" />

                
                    {/* <h1 className="grade-A brief">  Grade A thrift clothing and second new London used items.
                    </h1> */}
                    <h1 className="brief">  Amazon but for grade A thrift clothing and second new foreign used items.
                    </h1>
                    {/* <h1 className="brief">  Online marketplace to buy grade A thrift clothing and second new London/Asian & American used items.
                    </h1> */}


                    <p>  On Ortentic you will find  grade A thrift clothing <br />
                    and a wide variety of second new London/Asian used items</p>

                    <Link className="explore-shop" to="FeaturedProducts" spy={true} smooth={true} offset={50} duration={400}>
                        <h4>Explore Shop</h4>
                    
                        <KeyboardArrowDown className="icon"/>
                    </Link>

                    <img src="./images/shoppers.jpg" className="shoppers" alt="" />
                    <img src="./images/shoppers.jpg" className="shoppers2" alt="" />
            </div>
        </div>
    )
}


export default Banner