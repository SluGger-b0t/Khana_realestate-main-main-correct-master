import React from 'react'
// import Philosophy from './Philosophy'
import SectionCareer from './SectionCareer'
import Navbar from '../Navbar'
import Logo from '../../components/lg2.png'
import { Link } from 'react-router-dom'
import Career from './Career'
const FinalCareer = () => {
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
        <Career></Career>
      </div>
      <div>
        <SectionCareer></SectionCareer>
      </div>
    </div>
  )
}

export default FinalCareer
