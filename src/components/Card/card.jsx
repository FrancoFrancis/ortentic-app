

import React from "react";
import "./card.scss"
import {Link} from "react-router-dom"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Card = ({item}) => {

    return (
        <Link className="link" to={`/product/${item.id}`}>

        <div className="card">
            <div className="image">
                {item.isNew && <span className="new-season">new season</span>}
                <span className="fav"><FavoriteBorderOutlinedIcon/></span>
                <img src={item.img} alt="" className="mainImage" />
                <img src={item.img2} alt="" className="secondImage" />
            </div>
            <h2 className="title">{item.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>
        </div>

        </Link>
        
    )
}

export default Card