import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Announcement from "../components/Announcement/Announcement";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";

const Home = () => {
    return (
        <div className="container">
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
        </div>
    )
}

export default Home
