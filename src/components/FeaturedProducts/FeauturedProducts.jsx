
import React from "react";
import "./FeaturedProducts.scss"
import Card from "../Card/card";

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "./images/girl-hoddie.jpg",
            img2: "./images/guy-hoodie.jpg",
            title:"Hoodie",
            isNew: "true",
            oldPrice: "5,400",
            price: "3,900",
            details:"Average height and normal hip size"
            // sizes: "lg, xl, xxl",
        },
        {
            id: 2,
            img: "./images/guy-white-t.jpg",
            img2: "./images/girl-white-t.jpg",
            title:"White T-shirt",
            isNew: "true",
            oldPrice: "4,000",
            price: "3,700",
        },
        {
            id: 3,
            img: "./images2/denim-closeup.jpg",
            img2: "./images2/denim-girl1.jpeg",
            title:"Denim Jeans",
            isNew: "true",
            oldPrice: "4,000",
            price: "3,000",
        },
        {
            id: 4,
            img: "./images2/cargopants1.jpg",
            title:"Cargo Pants",
            oldPrice: "10,000",
            price: "8,300",
            isNew: "false"
        },
        {
            id: 4,
            img: "./images2/jean-jack.jpg",
            title:"Jean Jacket",
            oldPrice: "10,000",
            price: "8,300",
            isNew: "false"
        },
        {
            id: 5,
            img: "./images2/lumber-jacket.jpg",
            title:"Lumber Jacket",
            oldPrice: "8400",
            price: "5100",
            isNew: "false"
        },
        {
            id: 6,
            img: "./images2/girl-top1.jpg",
            title:"Female Tops",
            oldPrice: "3,400",
            price: "2700",
            isNew: "false"
        },
        {
            id: 7,
            img: "./images2/jacket.jpg",
            img2: "./images/jacket.jpg",
            title:"Jacket",
            oldPrice: "3,500",
            price: "2,000",
            isNew: "false"
        }

    ]

    return (
        <div className="featuredProducts">

            <div className="top" >
                <h1>{type} Products</h1>
                <p>On ortentic you will find a variety of items but we specially give in our time and effort towards
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