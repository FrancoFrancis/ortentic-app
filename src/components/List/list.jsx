


import React from "react";
import Card from "../Card/card";
import "./list.scss"

const List = () => {

    const data = [
        {
            id: 1,
            img: "../images2/fridge.jpg",
            img2: "../images2/microwave.jpg",
            title:"Microwave/Fridge",
            isNew: "true",
            oldPrice: "19",
            price: "12",
            details:"Average height and normal hip size"
        },
        {
            id: 2,
            img: "../images2/blind2.jpg",
            img2: "../images2/blind1.jpg",
            title:"Window Blinds",
            isNew: "true",
            oldPrice: "19",
            price: "12",
        },
        {
            id: 3,
            img: "../images2/red-rug.jpg",
            title:"Urban centre rug",
            oldPrice: "19",
            price: "12",
        },
        {
            id: 4,
            img: "../images2/baby-cradle.jpg",
            title:"Baby Cradle",
            oldPrice: "19",
            price: "12",
        },

    ]


    return (
        <div className="list">
            {data?.map(item=>(
            <Card item={item} key={item.id} />))}
        </div>
    )
}

export default List
