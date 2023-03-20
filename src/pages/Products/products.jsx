
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/list";
import "./products.scss"
const Products = () => {

    const catId = parseInt(useParams().id)

    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)
    

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h3>Product Categories</h3>
                    <div className="inputItem">
                        <input type="checkbox" value={1} id="1" />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" value={2} id="2" />
                        <label htmlFor="2">Jean Jackets</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" value={3} id="3" />
                        <label htmlFor="3">Cookers</label>
                    </div>
                </div>
                <div className="filterItem ">
                    <h3>Filter By Price</h3>
                    <div className="inputItem round-space">
                        <span className="round">0</span>
                        <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
                        <span className="round round-right">{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h3>Sort By</h3>
                    <div className="inputItem">
                        <input type="radio" name="price" id="asc" value="asc"  onChange={e=>setSort("asc")}/>
                        <label htmlFor="asc">Price (Lowest First) </label>
                    </div>   
                    <div className="inputItem">
                        <input type="radio" name="price" id="desc" value="desc" onChange={e=>setSort("asc")}/>
                        <label htmlFor="desc">Price (Highest First) </label>
                    </div>   
                </div>
            </div>
            <div className="right">
                <img src="../images2/shoes.jpg" className="category-image" alt="" /> 
                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    )
}

export default Products

