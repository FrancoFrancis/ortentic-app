
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { Link } from "react-router-dom";
import {Link} from "react-scroll"
import "./Navbar.scss"
import Cart from "../Cart/cart";

import {GiHamburgerMenu} from "react-icons/gi"
import {ImCross} from "react-icons/im"
import {BsCart4} from "react-icons/bs"



const Navbar = () => {

    const [open, setOpen] = React.useState(false)

    // hamburger
    const [Mobile, setMobile] = React.useState(true)

    return (
        <div className="navbar">
            <div className="wrapper">
                {/* left */}
                <div className="left">
                   {/* <Link className="link logo" to="/">
                   <img src="./images/ortenticlogo.png"  className="shopping" alt="svg" />
                   </Link> */}
                   <Link className="link logo" to="/"><h3>Ortentic</h3></Link>
                </div>

                <div className={Mobile? "nav-items-mobile" : "nav-items"} onClick={() => setMobile(false)}>

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
                        <Link className="link " to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="cat" spy={true} smooth={true} offset={50} duration={400}  >Product Categories </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/7">Stores</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="contact" spy={true} smooth={true} offset={50} duration={400}  >Contact</Link>
                        {/* <Link className="link" to="/products/8">Contact</Link> */}
                    </div>
                </div>

                {/* right */}
                <div className="right">
                    <div className="icons">
                        <SearchIcon className="icon"/>

                        <PersonOutlineIcon className="icon"/>

                        <FavoriteBorderOutlinedIcon className="icon"/>

                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <BsCart4/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                </div>
                <button className="mobile-menu-icon" onClick={()=> setMobile(!Mobile)}>
                    {Mobile ? <ImCross/> : <GiHamburgerMenu /> }
                </button>
                
            </div>
            {open && <Cart/>}         
            
        </div>
    )           
}

export default Navbar