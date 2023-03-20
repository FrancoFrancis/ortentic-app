
import React from "react";
// import "./cart.scss";
import "./cartinitial.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"



const Cart = () => {




    const data = [
        {
            id: 2,
            img: "../images2/guy-white-tee1.jpeg",
            title:"White T-shirt",
            isNew: "true",
            oldPrice: "19",
            price: "12",
            desc: "White T-shirt"
        },
        {
            id: 4,
            img: "../images/jeanjacket.jpg",
            title:"Jean jacket",
            oldPrice: "19",
            price: "12",
            desc: "blue jean jacket"
        }
    ]

    return (
      <div className="cart">

        <h1>Products in your cart</h1>
        {data?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title} </h1>
              <p> {item.desc.substring(0, 100)} </p>
              <div className="price">1 ⨉ ${item.price}</div>
            </div>
            <DeleteOutlinedIcon className="delete" />
          </div>
        ))}

        <div className="total">
          <span>TOTAL</span>
          <span className="overline">$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">RESET CART</span>
      </div>
    );
}

export default Cart


