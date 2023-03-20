
import React from "react";
import "./product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"



const Product = () => {

    const [selectedImage, setSelectedImage] = React.useState(0)
    const [quantity, setQuantity] = React.useState(1)

    const images = [
        "../images2/fine-lady2.jpg",
        "../images2/redlady-jacket.jpg"
    ]

    return (
      <div className="product">
        {/* left */}
        <div className="left">
          <div className="images">
            <img src={images[0]} alt="" onClick={(e) => setSelectedImage(0)} />
            <img src={images[1]} alt="" onClick={(e) => setSelectedImage(1)} />
          </div>
          <div className="mainImage">
            <img src={images[selectedImage]} alt="" />
          </div>
        </div>
        {/* right */}
        <div className="right">
          <h1>Brown Jacket</h1>
          <span className="price"> ₦5180</span>
          <p className="description">
            This stylish brown jacket is made from high-quality materials and
            features a front zip closure, two front pockets, and ribbed cuffs
            and hem. The classic design and rich brown color make it suitable
            for any occasion.
          </p>

          <div className="quantity">
            <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}> - </button>

            <span className="number">{quantity}</span>

            <button onClick={() => setQuantity((prev) => prev + 1)}> + </button>
          </div>
          
          <button className="add-to-cart">
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISHLIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: ZARA</span>
            <span>Product Type: Jacket</span>
            <span>Tag: Unisex, Cold, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADITIONAL INFORMATION</span>
            <hr />
            <span>FAQs</span>
          </div>
        </div>
      </div>
    );
}

export default Product