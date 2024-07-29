import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import placeholderImage from "../../tt.jpg"; // Replace with your placeholder image path
import Navbar from "../Navbar";
import Logo from "../../components/lg2.png";
const Header = () => {
  const [property, setProperty] = useState(null);
  const { id } = useParams(); // Accessing ID parameter from URL path

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/propertyDetail/${id}`
        );
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>; // Basic loading indicator
  }

  return (
    <>
      <div>
        <Link to="/">
          <div className="w-fit z-50 h-fit absolute top-0 left-1/2 transform -translate-x-1/2 ">
            <img src={Logo} alt="" className="w-24   z-50  " />
          </div>
        </Link>
      </div>
      <div className="sticky top-0   w-screen h-30 z-10" id="navbar">
        <Navbar></Navbar>
      </div>
      <div className="main-comp -mt-28">
        <div className="flex flex-col items-center justify-center h-screen relative">
          <img
            className="object-cover w-full h-full z-24"
            src={property.imageUrl || placeholderImage} // Use property image URL or placeholder
            alt="Full screen"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
            <h1 className="text-lg md:text-base text-xs md:px-20 md:pb-6 opacity-60">
              <span className="block">{property.propertyName}</span>
            </h1>
          </div>
        </div>

        {/* <header className="header">
          <div className="header-content">
            <h1 className="name">{property.propertyName}</h1>
            <p>{`${property.location}, ${property.city}`}</p>
            <p>Status: {property.status}</p>
            <p>Property Type: {property.propertyType}</p>
            <p>Price: {property.price}</p>
            <p>Area: {property.area} sq ft</p>
            <p>
              Plot Area:{' '}
              {property.plotArea
                ? `${property.plotArea} sq ft`
                : 'Not specified'}
            </p>
            <p>Bedrooms: {property.bedroom}</p>
            <p>Transaction: {property.transaction}</p>
            <p>Furnishing: {property.furnishing}</p>
            <p>Property Age: {property.propertyAge}</p>
            <p>Flat No: {property.flatNo}</p>
            <p>Building Name: {property.buildingName}</p>
            <p>Street: {property.street}</p>
            <p>Landmark: {property.landmark}</p>
            <p>Pincode: {property.pincode}</p>
            <p>Address: {property.address}</p>
            <p>City: {property.city}</p>
            <p>Detailed Information: {property.detailedInformation}</p>
            <p>Amenities: {property.amenities.join(', ')}</p>
          </div>
          <div className="header-buttons">
            <button>
              <p className="btn-txt">CONTACT US</p>
            </button>
            <button>
              <p className="btn-txt">DOWNLOAD BROCHURE</p>
            </button>
          </div>
        </header> */}

        <header className="header">
          <div className="header-content">
            <h1 className="name">{property.propertyName}</h1>
            <p>
              {property.street}, {property.city}
            </p>
          </div>
          <div className="header-buttons">
            <button>
              <p className="btn-txt">CONTACT US</p>
            </button>
            <button>
              <p className="btn-txt">DOWNLOAD BROCHURE</p>
            </button>
          </div>
        </header>

        <section className="property-details">
          <img
            src={'https://via.placeholder.com/300x150'}
            alt="Gotety Residency"
            className="property-image"
          />
          <div className="details">
            <h2>PROJECT DETAILS</h2>
            <p className="det-p">{`${property.location}, ${property.city}`}</p>

            <div className="prop">
              <div className="item">
                <h3>Price</h3>
                <p>{property.price}</p>
              </div>
              <div className="item">
                <h3>Area</h3>
                <p>{property.area} Sq.Ft.</p>
              </div>
              <div className="item">
                <h3>Project Area</h3>
                <p>
                  {' '}
                  {property.plotArea
                    ? `${property.plotArea} sq ft`
                    : 'Not specified'}
                </p>
              </div>
              <div className="item">
                <h3>Possession</h3>
                <p>Immediately</p>
              </div>
              <div className="item">
                <h3>Bedrooms</h3>
                <p>{property.bedroom} BHK</p>
              </div>
              <div className="item">
                <h3>City</h3>
                <p>{property.city}</p>
              </div>
              <div className="item">
                <h3>Location</h3>
                <p>{property.address}</p>
              </div>
              <div className="item">
                <h3>Commencement Certificate</h3>
                <p>No</p>
              </div>
              <div className="item">
                <h3>Occupancy Certificate</h3>
                <p>No</p>
              </div>
            </div>
          </div>
        </section>

        <section className="specification">
          <h2>PROJECT PLAN</h2>
          <table>
            <thead>
              <tr>
                <th>BHK</th>
                <th>Type</th>
                <th>Carpet Area</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{property.bedroom}</td>
                <td>{property.propertyType}</td>
                <td>{property.area}</td>
              </tr>
            </tbody>
          </table>
          <div className="amenities">
            <h2>AMENITIES</h2>
            <div className="ame">
              {/* <ul style={{ listStyleType: 'disc' }}>
                <li>Lift</li>
              </ul>
              <ul style={{ listStyleType: 'disc' }}>
                <li>CCTV</li>
              </ul>
              <ul style={{ listStyleType: 'disc' }}>
                <li>Terrace</li>
              </ul> */}
              {property.amenities.join(', ')}
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>Looking To Sell Or Rent Your Property?</p>
          <button>SUBMIT NOW</button>
        </footer>
      </div>
    </>
  )
};

export default Header;
