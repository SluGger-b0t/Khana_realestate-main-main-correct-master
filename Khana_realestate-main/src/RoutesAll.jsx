import React from 'react'
import Navbar from './components/Navbar';
import Hero from './Hero';
import Abt from './components/Abt';
// import Logoslider from './components/logoSlider/Logoslider';
import Loc from './components/location/Loc';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
import Logo from "./components/lg2.png";
import LookingFor from './components/LookingFor/LookingFor';
import FeaturedProjects from './components/Properties/FeaturedProjects';
const RoutesAll = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <div className="w-fit z-50 h-fit absolute top-0 left-1/2 transform -translate-x-1/2 ">
            <img src={Logo} alt="" className="w-24   z-50  " />
          </div>
        </Link>
      </div>
      <div className="sticky top-0   w-full h-30 z-10" id="navbar">
        <Navbar></Navbar>
      </div>
      <div className="-mt-24" id="hero">
        <Hero vidsrc="src\assets\Hero.mp4" />
      </div>
      <div id="aboutus">
        <Abt />
      </div>
      <div id="logoslider">
        <LookingFor />
      </div>
      <div>
        <FeaturedProjects/>
      </div>
      <div>
        <Loc></Loc>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
    </div>
  );
}

export default RoutesAll
