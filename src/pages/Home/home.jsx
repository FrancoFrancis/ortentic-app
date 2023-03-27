
import React from "react";
import Banner from "../../components/Banner/banner";
import Categories from "../../components/Categories/categories";
import Contact from "../../components/Contact/contact";
import Cat from "../../components/differentCatText/cat";
import FeaturedProducts from "../../components/FeaturedProducts/FeauturedProducts";

import "./home.scss"
const Home = () => {
    return (
        <div className="home">
        <Banner/>
        <FeaturedProducts type="Trending" />
        <Cat/>
        <Categories type="shop from different categories" />
        <FeaturedProducts type="Popular" />
        <Contact/>
        </div>
    )
}

export default Home