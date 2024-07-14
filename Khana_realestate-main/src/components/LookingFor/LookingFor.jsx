import React from 'react'
import './LookingFor.css'

function LookingFor() {
  return (
    <>
      <h1 className="heading">WHAT ARE YOU LOOKING FOR?</h1>
      <div className="container">
        <div className="box1">
          {/* img */}
          <img src="./look/rental.png" alt="" srcset="" />
          <h3 className="title">OFFICE SPACE</h3>
          <p>
            Give Your Business a Presence in Prime Location, Witness the most
            luxurious working atmosphere.
          </p>
        </div>
        <div className="box2">
          {/* img */}
          <img src="./look/home.png" alt="" srcset="" />
          <h3 className="title">RESIDENTIAL APARTMENT</h3>
          <p>
            Find verified listings of luxury residential apartments for sale /
            Rent posted from verified owner
          </p>
        </div>
        <div className="box3">
          <img src="./look/land.png" alt="" srcset="" />
          <h3 className="title">LAND</h3>
          <p>
            Buy, rent or sale of residential and commercial in your location
          </p>
        </div>
        <div className="box4">
          <img src="./look/commercial.png" alt="" srcset="" />
          <h3 className="title">COMMERCIAL</h3>
          <p>
            Get details of all the Commercial property For Sale in prime
            location, Office Space, Shops, Showrooms etc.
          </p>
        </div>
      </div>
    </>
  )
}

export default LookingFor