// src/components/Specification.js
import React from 'react'
import './Specification.css'

const Specification = () => {
  return (
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
            <td>2 BHK</td>
            <td>Residential Apartment</td>
            <td>969 Sq.Ft.</td>
          </tr>
          <tr>
            <td>2 BHK</td>
            <td>Residential Apartment</td>
            <td>1108 Sq.Ft.</td>
          </tr>
        </tbody>
      </table>
      <div className="amenities">
        <h2>AMENITIES</h2>
        <div className="ame">
          <ul style={{ listStyleType: 'disc' }}>
            <li>Lift</li>
          </ul>
          <ul style={{ listStyleType: 'disc' }}>
            <li>CCTV</li>
          </ul>
          <ul style={{ listStyleType: 'disc' }}>
            <li>Terrace</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Specification
