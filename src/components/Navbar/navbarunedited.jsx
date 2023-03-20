
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/cart";


const Navbar = () => {

const [open, setOpen] = React.useState(false)



    return (
        <div className="navbar">
            <div className="wrapper">
                {/* left */}
                <div className="left">
                    <div className="item">
                        <img src="/images/en.png" alt/>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>NGN</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">Children</Link>
                    </div>
                </div>
                {/* center */}
                <div className="centre">
                    <Link className="link" to="/">Ortentic✔</Link>
                </div>
                {/* right */}
                <div className="right">
                    <div className="item active">
                        <Link className="link " to="/products/5">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/6">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/7">Stores</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/8">Contact</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon/>

                        <PersonOutlineIcon/>

                        <FavoriteBorderOutlinedIcon/>

                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <ShoppingCartOutlinedIcon/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
           
            </div>
            {open && <Cart/>}
        </div>
    )           
}


{/* <span>✅</span>
<span>❎</span> */}

export default Navbar





// WORKING


import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/cart";

import {GiHamburgerMenu} from "react-icons/gi"
import {ImCross} from "react-icons/im"
import {BsCart4} from "react-icons/bs"



const Navbar = () => {

    const [clicked, isClicked] = React.useState(false)


    const handleClick = () => {
        isClicked(!clicked);
        console.log("clicked")
    }

    const [open, setOpen] = React.useState(false)

    return (
        <div className="navbar">
            <div className="wrapper">
                {/* left */}
                <div className="left">
                   <Link className="link logo" to="/"><h3>Ortentic✔</h3></Link>
                </div>

                  {/* center */}
                <div className="centre">
                    <div className="item">
                        <img src="/images/flag-naija.png" alt/>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>NGN</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item active">
                        <Link className="link " to="/products/5">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/6">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/7">Stores</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/8">Contact</Link>
                    </div>
                </div>

                {/* right */}
                <div className="right">

                    <div className="icons">
                        <SearchIcon/>

                        <PersonOutlineIcon/>

                        <FavoriteBorderOutlinedIcon/>

                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <BsCart4/>
                            <span>0</span>
                        </div>
                    </div>

                </div>
                {!clicked? <GiHamburgerMenu className="icon" onClick={handleClick}/> : <ImCross className="icon" onClick={handleClick}/>}
            </div>
            {open && <Cart/>}         
            
            
        </div>
    )           
}


export default Navbar