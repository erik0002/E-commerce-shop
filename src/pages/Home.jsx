import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Announcement from "../components/Announcement/Announcement";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";

const Home = () => {
    return (
        <div className="container">
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
        </div>
    )
}

export default Home
