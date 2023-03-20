import React from "react";
import "./banner.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./textanimation.scss"

const Banner = () => {


    return (
        <div className="">
            <div className="container">
                <div className="heading-brief">
                    <h1 className="banner-fubay fubay-animated" data-text="Ortentic✔">Ortentic✔</h1>
                    <h2 className="brief"> On Ortentic you will find <span className="grade-A"> grade A </span> thrift clothing <br />
                    and a wide variety of second new London used items.</h2>
                </div>
                <div className="image-container">
                    <img src="./images/thumbsup.png"  className="shopping" alt="svg" />
                </div>

                {/* <ShoppingCartOutlinedIcon className="icon "/> */}
            </div>
        </div>
    )
}


export default Banner