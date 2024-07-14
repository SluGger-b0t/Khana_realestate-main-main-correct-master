import React from 'react'
import Philosophy from './Philosophy'
import Sections from './Sections'
import Navbar from '../Navbar'
import Logo from "../../components/lg2.png"
import { Link } from 'react-router-dom'
const FinalPhilosophy = () => {
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
      <div className="-mt-28">
        <Philosophy></Philosophy>
      </div>
      <div>
        <Sections></Sections>
      </div>
    </div>
  );
}

export default FinalPhilosophy
