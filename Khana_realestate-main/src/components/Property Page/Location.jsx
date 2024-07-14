// src/components/Location.js
import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <section className="location">
      <h2>LOCATION</h2>
      <div className="map">
        <p>Oops! Something went wrong.</p>
        <p>
          This page didn't load Google Maps correctly. See the JavaScript
          console for technical details.
        </p>
      </div>
    </section>
  )
}

export default Location
