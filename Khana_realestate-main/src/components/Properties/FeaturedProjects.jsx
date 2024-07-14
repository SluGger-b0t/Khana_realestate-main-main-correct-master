import React from 'react'
import './FeaturedProjects.css'


const ProjectCard = ({ image, title, price, location, area, bedroom }) => (
  <div className="project-card">
    <div className="project-image">
      <img src={image || 'https://via.placeholder.com/300'} alt={title} />
      <span className="featured-tag">FEATURED</span>
    </div>
    <div className="project-price">{price}</div>
    <h3 className="project-title">{title}</h3>
    <p className="project-location">{location}</p>
    <div className="project-details">
      <span>AREA</span>
      <span>BEDROOM</span>
      <span>{area}</span>
      <span>{bedroom}</span>
    </div>
    <button className="see-details-btn">SEE DETAILS</button>
  </div>
)

const FeaturedProjects = () => {
  const projects = [
    {
      image: null,
      title: 'Gotety Residency',
      price: '₹ 87.21 Lac - ₹ 99.72 Lac',
      location: 'Valasaravakkam',
      area: '969 Sq.Ft.-1108 Sq.Ft.',
      bedroom: '2',
    },
    {
      image: null,
      title: 'Purva Somerset House',
      price: '₹ 3.75 Cr - ₹ 7.25 Cr',
      location: 'Guindy',
      area: '1925 Sq.Ft.-3739 Sq.Ft.',
      bedroom: '3, 4',
    },
    {
      image: null,
      title: 'Brigade Xanadu',
      price: '₹ 62.50 Lac - ₹ 1.22 Cr',
      location: 'Mogappair',
      area: '682 Sq.Ft.-1288 Sq.Ft.',
      bedroom: '1, 2, 3',
    },
    {
      image: null,
      title: 'Gotety Residency',
      price: '₹ 87.21 Lac - ₹ 99.72 Lac',
      location: 'Valasaravakkam',
      area: '969 Sq.Ft.-1108 Sq.Ft.',
      bedroom: '2',
    },
    {
      image: null,
      title: 'Purva Somerset House',
      price: '₹ 3.75 Cr - ₹ 7.25 Cr',
      location: 'Guindy',
      area: '1925 Sq.Ft.-3739 Sq.Ft.',
      bedroom: '3, 4',
    },
    {
      image: null,
      title: 'Brigade Xanadu',
      price: '₹ 62.50 Lac - ₹ 1.22 Cr',
      location: 'Mogappair',
      area: '682 Sq.Ft.-1288 Sq.Ft.',
      bedroom: '1, 2, 3',
    },
    // Add more projects here
  ]

  return (
    <div className="featured-projects">
      <h1 className='heading-featured'>FEATURED PROJECTS</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProjects
