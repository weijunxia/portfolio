import React from 'react'
import '../styles/banner.css'
import folder from '../images/folder.png'
import resume from '../images/pdf.png'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className="banner">
      <div className="banner_info">
        <h1>
          Hi! I'm Wei, a Full Stack Software Engineer, Nutritionist, and Angel
          Investor.
        </h1>
      </div>
      <div className="banner_icons">
        <Link to="/projects">
          <div className="folder_description">
            <img src={folder} className="folder_image" alt="folder" />
            <p className="folder_paragraph">Projects</p>
          </div>
        </Link>
        <div className="resume_container">
          <img src={resume} className="resume_image" alt="resume pdf" />
          <p className="resume_paragraph">Resume</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
