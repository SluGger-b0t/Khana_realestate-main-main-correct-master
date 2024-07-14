// src/components/PropertyDetails.js
import React from 'react'
import './PropertyDetails.css'

const PropertyDetails = () => {
  return (
    <section className="property-details">
      <img
        src={'https://via.placeholder.com/300x150'}
        alt="Gotety Residency"
        className="property-image"
      />
      <div className="details">
        <h2>PROJECT DETAILS</h2>
        <p className="det-p">
          Modern 2BHK at Valasaravakkam 969sqft with UDS 442.5sqft on 2nd floor
          with lift, car park
        </p>

        <div className="prop">
          <div className="item">
            <h3>Price</h3>
            <p>Price On Request</p>
          </div>
          <div className="item">
            <h3>Area</h3>
            <p>969 Sq.Ft. - 1108 Sq.Ft.</p>
          </div>
          <div className="item">
            <h3>Project Area</h3>
            <p>3990.00 Sq.Ft.</p>
          </div>
          <div className="item">
            <h3>Possession</h3>
            <p>Immediately</p>
          </div>
          <div className="item">
            <h3>Configuration</h3>
            <p>2 BHK</p>
          </div>
          <div className="item">
            <h3>City</h3>
            <p>Chennai(All)</p>
          </div>
          <div className="item">
            <h3>Location</h3>
            <p>Valasaravakkam</p>
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
  )
}

export default PropertyDetails
