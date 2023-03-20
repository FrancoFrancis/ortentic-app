
import React from "react";
import "./FeaturedProducts.scss"
import Card from "../Card/card";

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "./images/hoodie1.jpg",
            img2: "./images/hoodie2.jpg",
            title:"Hoodie",
            isNew: "true",
            oldPrice: "19",
            price: "12",
            details:"Average height and normal hip size"
        },
        {
            id: 2,
            img: "./images2/guy-white-tee1.jpeg",
            img2: "./images2/guy-white-tee2.jpeg",
            title:"White T-shirt",
            isNew: "true",
            oldPrice: "19",
            price: "12",
        },
        {
            id: 2,
            img: "./images2/guy-white-tee1.jpeg",
            img2: "./images2/guy-white-tee2.jpeg",
            title:"White T-shirt",
            isNew: "true",
            oldPrice: "19",
            price: "12",
        },
        {
            id: 3,
            img: "./images2/girl-dark-tee2.jpeg",
            title:"Black T-shirt",
            oldPrice: "19",
            price: "12",
            isNew: "false"
        },
        {
            id: 4,
            img: "./images/jeanjacket.jpg",
            title:"Jean jacket",
            oldPrice: "19",
            price: "12",
            isNew: "false"
        },
        {
            id: 5,
            img: "./images/jeanjacket.jpg",
            title:"Jean jacket",
            oldPrice: "19",
            price: "12",
            isNew: "false"
        },
        {
            id: 6,
            img: "./images/jeanjacket.jpg",
            title:"Jean jacket",
            oldPrice: "19",
            price: "12",
            isNew: "false"
        },

    ]

    return (
        <div className="featuredProducts">

            <div className="top" >
                <h1>{type} Products</h1>
                <p>On fubay you will find a variety of items but we specially give in our time and effort towards
                   making sure our featured products are of top notch quality
                </p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
            
        </div>
    )
}

export default FeaturedProducts