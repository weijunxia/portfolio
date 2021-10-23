import React from 'react'
import '../styles/banner.css'
import folder from '../images/folder.png'
import resume from '../images/pdf.png'
import chrome from '../images/chrome.png'
import { Link } from 'react-scroll'

function Banner() {
  return (
    <div className="banner">
      <div className="banner_info">
        <h1>
          Hi! I'm Wei, a Full Stack Software Engineer, Nutritionist, and Angel
          Investor.
        </h1>
      </div>
      <div className="resume_container">
        <a
          className="resume_link"
          href="https://drive.google.com/file/d/1g115Q8qZWk_aefkAiLKPmCqQES6FveDK/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <img src={resume} className="resume_image" alt="resume pdf" />
          <p className="resume_paragraph">Resume</p>
        </a>
      </div>
      <div className="linkedin_container">
        <a
          className="linkedin_link"
          href="https://www.linkedin.com/in/w3i/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={chrome}
            className="linkedin_image"
            alt="linkedin chrome icon"
          />
          <p className="linkedin_paragraph">LinkedIn</p>
        </a>
      </div>
      <Link to="projects" smooth={true} offset={-50}>
        <div className="folder_description">
          <img src={folder} className="folder_image" alt="folder" />
          <p className="folder_paragraph">Projects</p>
        </div>
      </Link>
      {/* </div> */}
    </div>
  )
}

export default Banner
