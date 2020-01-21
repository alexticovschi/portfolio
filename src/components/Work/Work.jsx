import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import "./work.scss"

const getPortfolioImages = graphql`
  query portfolioImages {
    moviedb: file(relativePath: { eq: "portfolio/moviedb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    foodwise: file(relativePath: { eq: "portfolio/foodwise.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    traveler: file(relativePath: { eq: "portfolio/traveler.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gsw: file(relativePath: { eq: "portfolio/gsw.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lofter: file(relativePath: { eq: "portfolio/lofter.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Work = () => {
  const { moviedb, foodwise, traveler, gsw, lofter } = useStaticQuery(
    getPortfolioImages
  )

  return (
    <section className="work" id="work">
      <h1 className="work__title">Some Things I've Built</h1>

      <div className="work__wrapper">
        <div className="project movie-project">
          <figure className="project__img-wrapper">
            <a
              href="https://tmdb-react-v2.netlify.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                fluid={moviedb.childImageSharp.fluid}
                className="project__img"
                alt="TMDB hero"
              />
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>Movie Browser</h4>

            <div className="project__about">
              <p>
                A web app for visualizing movie info. Browse your favorite
                Movies, TV shows, actors, recently added movies, and detailed
                information about each movie.
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
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="project__icon" title="Github" />
              </a>
              <a
                href="https://tmdb-react-v2.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project traveler-project">
          <figure className="project__img-wrapper">
            <a
              href="https://traveler-gatsby.netlify.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                fluid={traveler.childImageSharp.fluid}
                className="project__img"
                alt="traveler hero"
              />
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>Traveler</h4>

            <div className="project__about">
              <p>
                A Travel and Tourism Website. Choose from over 120 countries and
                explore cultures, landscapes, wildlife and communities from Asia
                to Africa, the Arctic to the Americas.
              </p>
            </div>

            <ul>
              <li>React</li>
              <li>GatsbyJS</li>
              <li>Contentful API</li>
              <li>CSS Grid</li>
            </ul>

            <div className="project__links">
              <a
                href="https://github.com/alexticovschi/traveler"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="project__icon" title="Github" />
              </a>
              <a
                href="https://traveler-gatsby.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project foodwise-project">
          <figure className="project__img-wrapper">
            <a
              href="https://foodwise.netlify.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                fluid={foodwise.childImageSharp.fluid}
                className="project__img"
                alt="foodwise hero"
              />
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>FoodWise</h4>

            <div className="project__about">
              <p>
                A catering website made with Gatsby, CSS Grid and Flexbox.
                Delivering sensational food to corporate events, weddings and
                private parties in London and the UK.
              </p>
            </div>

            <ul>
              <li>React</li>
              <li>Gatsby</li>
              <li>CSS Grid</li>
              <li>Flexbox</li>
            </ul>

            <div className="project__links">
              <a
                href="https://github.com/alexticovschi/foodwise"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="project__icon" title="Github" />
              </a>
              <a
                href="https://foodwise.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project gsw-project">
          <figure className="project__img-wrapper">
            <a
              href="https://gsw-react.netlify.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                fluid={gsw.childImageSharp.fluid}
                className="project__img"
                alt="gsw hero"
              />
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>Golden State Warriors</h4>

            <div className="project__about">
              <p>
                A React based web app that connects to Firebase to pull data
                about Golden State Warriors NBA players and games. Performs
                Firebase JavaScript CRUD operations.
              </p>
            </div>

            <ul>
              <li>React</li>
              <li>Firebase</li>
              <li>Material-UI</li>
              <li>CSS Grid</li>
              <li>Flexbox</li>
            </ul>

            <div className="project__links">
              <a
                href="https://github.com/alexticovschi/gsw-react"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="project__icon" title="Github" />
              </a>
              <a
                href="https://gsw-react.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project lofter-project">
          <figure className="project__img-wrapper">
            <a
              href="https://lofter.netlify.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                fluid={lofter.childImageSharp.fluid}
                className="project__img"
                alt="lofter hero"
              />
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>Lofter</h4>

            <div className="project__about">
              <p>
                An Interior Design website made with React, CSS Grid and
                Flexbox. Crafting elegant solutions to complex problems through
                strategic thought and technological excellence.
              </p>
            </div>

            <ul>
              <li>React</li>
              <li>CSS Grid</li>
              <li>Flexbox</li>
            </ul>

            <div className="project__links">
              <a
                href="https://github.com/alexticovschi/lofter"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="project__icon" title="Github" />
              </a>
              <a
                href="https://lofter.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
