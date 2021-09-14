import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Announcement from "../components/Announcement/Announcement";
import Slider from "../components/Slider/Slider";

const Home = () => {
    return (
        <div className="container">
            <Announcement/>
            <Navbar/>
            <Slider/>
        </div>
    )
}

export default Home
