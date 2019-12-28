import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import "./work.scss"

import lofter from "../../images/portfolio/lofter.png"
import traveler from "../../images/portfolio/traveler.png"
import moviedb from "../../images/portfolio/moviedb.jpg"

const Work = () => {
  return (
    <section className="work" id="work">
      <h1 className="work__title">Some Things I've Built</h1>

      <div className="project lofter-project">
        <figure className="project__img-wrapper">
          <a href="https://lofter.netlify.com/" target="blank">
            <img
              className="project__img"
              src={lofter}
              alt="lofter front page"
            />
          </a>
        </figure>

        <div className="project__info">
          <h5>Featured Project</h5>
          <h4>Lofter</h4>

          <div className="project__about">
            <p>
              An Interior Design website made with React, CSS Grid and Flexbox.
              We craft elegant, inspirational and distilled solutions to complex
              problems through strategic thought, dynamic creativity and
              technological excellence.
            </p>
          </div>

          <ul>
            <li>React</li>
            <li>CSS Grid</li>
            <li>Flexbox</li>
          </ul>

          <div className="project__links">
            <a href="https://github.com/alexticovschi/lofter" target="blank">
              <FaGithub className="project__icon" />
            </a>
            <a href="https://lofter.netlify.com/" target="blank">
              <FaExternalLinkAlt className="project__icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="project traveler-project">
        <figure className="project__img-wrapper">
          <a href="https://traveler-gatsby.netlify.com/" target="blank">
            <img
              className="project__img"
              src={traveler}
              alt="traveler front page"
            />
          </a>
        </figure>

        <div className="project__info">
          <h5>Featured Project</h5>
          <h4>Traveler</h4>

          <div className="project__about">
            <p>
              A Travel and Tourism Website. Explore local spots with our guides
              who are passionate about showing you their backyard. Choose from
              over 120 countries and explore cultures, landscapes, wildlife and
              communities from Asia to Africa, the Arctic to the Americas.
            </p>
          </div>

          <ul>
            <li>React</li>
            <li>GatsbyJS</li>
            <li>Contentful</li>
            <li>CSS Grid</li>
            <li>Flexbox</li>
          </ul>

          <div className="project__links">
            <a href="https://github.com/alexticovschi/traveler" target="blank">
              <FaGithub className="project__icon" />
            </a>
            <a href="https://traveler-gatsby.netlify.com/" target="blank">
              <FaExternalLinkAlt className="project__icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="project">
        <figure className="project__img-wrapper">
          <a href="https://tmdb-react-v2.netlify.com/" target="blank">
            <img className="project__img" src={moviedb} alt="TMDB front page" />
          </a>
        </figure>

        <div className="project__info">
          <h5>Featured Project</h5>
          <h4>Movie Browser</h4>

          <div className="project__about">
            <p>
              A web app for visualizing movie info. Browse your favorite Movies,
              TV shows, actors, recently added movies, and detailed information
              about each movie.
            </p>
          </div>

          <ul>
            <li>React</li>
            <li>TMDb API</li>
            <li>CSS Grid</li>
            <li>Flexbox</li>
          </ul>

          <div className="project__links">
            <a
              href="https://github.com/alexticovschi/tmdb-react-V2"
              target="blank"
            >
              <FaGithub className="project__icon" />
            </a>
            <a href="https://tmdb-react-v2.netlify.com/" target="blank">
              <FaExternalLinkAlt className="project__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
