/* import React, { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <header className="bg-navbarBackground bg-opacity-70">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="..."
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-${
            menuOpen ? '9%' : '-100%'
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500 text-navtextclr" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-navtextclr" href="#">
                Solution
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-navtextclr" href="#">
                Resource
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-navtextclr" href="#">
                Developers
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-navtextclr" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
            onClick={toggleMenu}
          >
            Sign in
          </button>
          <ion-icon
            onClick={toggleMenu}
            name={menuOpen ? 'close' : 'menu'}
            className="text-3xl cursor-pointer md:hidden"
          ></ion-icon>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
 */
import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
/* import { SidebarData } from "./SidebarData"; */
import './Navbar.css'
import { SidebarData } from './SidebarData'


const Navbar = () => {
  const showSidebar = () => setSidebar(!sidebar)
const [showLocation, setShowLocation] = useState(false);

const toggleLocation = () => {
  setShowLocation(!showLocation);
};
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className="navcont -mt-1">
      {/*  <Link to="/">
        <div className=" flex   justify-center items-center" >
          <img src={Logo} alt="" className="w-24 h-24  z-50 mt-24 absolute " />
        </div>
      </Link> */}
      <div className={sidebar ? "hidden" : "navbar"}>
        <Link to="#" className="menu-bars margin-0">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu "}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle" onClick={showSidebar}>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <div key={index}>
                {item.subItems ? (
                  <div>
                    <li
                      className={item.cName}
                      onClick={() =>
                        item.title === "Location" ? toggleLocation() : null
                      }
                    >
                      <button className='nav-text text-lg px-8 w-full hover:bg-slate-400'>{item.title}</button>
                    </li>
                    {showLocation && (
                      <ul className="sub-items max-h-60 overflow-y-auto">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className={`${subItem.cName} py-2 flex justify-center text-lg`}>
                            <Link to={subItem.path}>
                              <span className=''>{subItem.title} </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <li className={item.cName}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar
