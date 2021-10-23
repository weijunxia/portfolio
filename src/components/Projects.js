import React from 'react'
import gentlyused from '../images/gentlyused.png'
import driveme from '../images/driveme.png'
import fatfire from '../images/fatFIRE.png'
import cryptoflipr from '../images/cryptoflipr.png'
import '../styles/projects.css'

function Projects() {
  return (
    <div>
      <h1>Featured Projects</h1>
      <div className="projects_wrapper" id="projects">
        <section className="project_card">
          <div className="project_card_left">
            <h3 className="project_card_left_h3">
              Gently Used: Customer to customer used clothing marketplace,
              marketed towards those who resell clothes and care about the
              environment.
            </h3>
            <img
              src={gentlyused}
              alt="gently used project screenshot"
              className="project_card_left_image"
            />
          </div>
          <div className="project_card_right">
            <h3 className="project_card_right_h3">
              Techonologies Used: React, Redux, PostgreSQL, Express, Node, AWS
              S3, and Stripe.
            </h3>
            <h3 className="project_card_right_h3">
              Links:&#160;
              <a
                className="project_card_link"
                href="https://github.com/weijunxia/gentlyused"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              &#160; | &#160;
              <a
                className="project_card_link"
                href="https://peaceful-coast-61697.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </h3>
            <p className="project_card_right_p">
              Designing, developing, and deploying a responsive and secure full
              stack application, using PostgreSQL for my database and Redux for
              state management in one week with plans, on the GitHub, in the
              works to bring the site to launch.
            </p>
            <p className="project_card_right_p">
              Implementing AWS S3 image hosting through CloudFront for to allow
              users quick access to uploading and their photos
            </p>
          </div>
        </section>
        <section className="project_card">
          <div className="project_card_left">
            <h3>fatFIRE</h3>
            <img
              src={fatfire}
              alt="fat FIRE project screenshot"
              className="project_card_left_image"
            />
          </div>
          <div className="project_card_right">
            <h3 className="project_card_right_h3">
              Techonologies Used: React, MongoDB, Express, Node, Recharts, and
              Plaid.
            </h3>
            <h3 className="project_card_right_h3">
              Links:&#160;
              <a
                className="project_card_link"
                href="https://github.com/weijunxia/FIRE"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              &#160; | &#160;
              <a
                className="project_card_link"
                href="https://shrouded-basin-08350.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </h3>
            <p className="project_card_right_p">
              Financial management app where users securely access their bank
              accounts and transactions using Plaid’s API.
            </p>
            <p className="project_card_right_p">
              Using the Plaid Link library on front end to allow users to
              securely connect accounts with Plaid API, as well as handling
              credential validation and multi-factor authentication.{' '}
            </p>
            <p className="project_card_right_p">
              Implementing secure access token handling to securely access
              financial data from a user’s bank account.{' '}
            </p>
            <p className="project_card_right_p">
              Integrating Recharts into React front end to help users analyze
              their financial data and set goals.
            </p>
          </div>
        </section>
        <section className="project_card">
          <div className="project_card_left">
            <h3>DriveMe</h3>
            <img
              src={driveme}
              alt="drive me project screenshot"
              className="project_card_left_image"
            />
          </div>
          <div className="project_card_right">
            <h3 className="project_card_right_h3">
              Techonologies Used: React, PostgreSQL, Express, Node, and Plaid
              Link API.
            </h3>
            <h3 className="project_card_right_h3">
              Links:&#160;
              <a
                className="project_card_link"
                href="https://github.com/weijunxia/DriveMe"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              &#160; | &#160;
              <a
                className="project_card_link"
                href="https://rocky-journey-81641.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </h3>
            <p className="project_card_right_p">
              Tesla rental service app based in NYC, with prospects to pivot to
              a robo taxi service as SAE 4+ is achieved.
            </p>
            <p className="project_card_right_p">
              Product managing the team, delegating responsibilities, git
              management, as well as aiding in troubleshooting.
            </p>
            <p className="project_card_right_p">
              Integrating Mapbox API to allow users to find and filter rental
              cars by location and availability.
            </p>
            <p className="project_card_right_p">
              Oversaw design and front end to create a modern, sleek, and
              performant design with minimal use of CSS libraries.
            </p>
          </div>
        </section>
        <section className="project_card">
          <div className="project_card_left">
            <h3>CryptoFlipr</h3>
            <img
              src={cryptoflipr}
              alt="crypto flipr project screenshot"
              className="project_card_left_image"
            />
          </div>
          <div className="project_card_right">
            <h3 className="project_card_right_h3">
              Techonologies Used: Javascript, HTML, CSS
            </h3>
            <h3 className="project_card_right_h3">
              Links:&#160;
              <a
                className="project_card_link"
                href="https://github.com/weijunxia/CryptoFlipr"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              &#160; | &#160;
              <a
                className="project_card_link"
                href="https://cryptoflipr.surge.sh/"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </h3>
            <p>
              Developed custom game logic using vanilla JS to create an
              immersive and competitive gaming experience.
            </p>
            <p>
              Designed and developed a fully responsive front end for both
              mobile and desktop users.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects
