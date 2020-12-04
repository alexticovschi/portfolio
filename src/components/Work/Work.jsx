import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import "./work.scss"

const getPortfolioImages = graphql`
  query portfolioImages {
    bloggingcoder: file(relativePath: { eq: "portfolio/bloggingcoder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    flavoroso: file(relativePath: { eq: "portfolio/flavoroso.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    moviedb: file(relativePath: { eq: "portfolio/moviedb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    casatoro: file(relativePath: { eq: "portfolio/casatoro.jpg" }) {
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
    knightsbridge: file(relativePath: { eq: "portfolio/knightsbridge.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Work = () => {
  const {
    bloggingcoder,
    flavoroso,
    moviedb,
    casatoro,
    traveler,
    knightsbridge,
  } = useStaticQuery(getPortfolioImages)

  return (
    <section className="work" id="work">
      <h1 className="work__title">Some Things I've Built</h1>

      <div className="work__wrapper">
        <div className="project knightsbridge-project">
          <figure className="project__img-wrapper">
            <a
              href="https://knightsbridgeliving.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                fluid={knightsbridge.childImageSharp.fluid}
                className="project__img"
                alt="knightsbridge hero"
              />
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>Knightsbridge Living</h4>

            <div className="project__about">
              <p>
                A JAMstack real estate website built with Gatsby.js and
                Contentful - Headless CMS.
              </p>
            </div>

            <ul>
              <li>GatsbyJS</li>
              <li>Contentful API</li>
              <li>GraphQL</li>
              <li>CSS Grid</li>
              <li>Sass</li>
            </ul>

            <div className="project__links">
              <a
                href="https://github.com/alexticovschi/knightsbridge-living"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="project__icon" title="Github" />
              </a>
              <a
                href="https://knightsbridgeliving.netlify.app/"
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
              href="https://traveler-tours.netlify.app/"
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
                A JAMstack app built with Gatsby that fetches tour data from
                Contentful API. Designed to be a Travel and Tourism website app.
              </p>
            </div>

            <ul>
              <li>GatsbyJS</li>
              <li>Contentful API</li>
              <li>GraphQL</li>
              <li>CSS Grid</li>
              <li>Sass</li>
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
                href="https://traveler-tours.netlify.app/"
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

        <div className="project bloggingcoder-project">
          <figure className="project__img-wrapper">
            <a
              href="https://bloggingcoder.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                fluid={bloggingcoder.childImageSharp.fluid}
                className="project__img"
                alt="BloggingCoder hero"
              />
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>BloggingCoder</h4>

            <div className="project__about">
              <p>
                A Fullstack multi-user blogging platform with Node, React,
                Next.js, Express, and MongoDB. Write and manage your own blogs.
              </p>
            </div>

            <ul>
              <li>React</li>
              <li>Sass</li>
              <li>Next.js</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>

            <div className="project__links">
              <a
                href="https://github.com/alexticovschi/blogger"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="project__icon" title="Github" />
              </a>
              <a
                href="https://bloggingcoder.com/"
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

        <div className="project flavoroso-project">
          <figure className="project__img-wrapper">
            <a
              href="http://flavoroso.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                fluid={flavoroso.childImageSharp.fluid}
                className="project__img"
                alt="Flavoroso hero"
              />
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>Flavoroso Restaurant</h4>

            <div className="project__about">
              <p>
                A Fullstack restaurant application built with Laravel, MySQL,
                jQuery, Bootstrap and Sass. Admin can perform CRUD operations
                from admin dashboard.
              </p>
            </div>

            <ul>
              <li>Laravel</li>
              <li>MySQL</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Sass</li>
            </ul>

            <div className="project__links">
              <a
                href="https://github.com/alexticovschi/restaurant-app"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="project__icon" title="Github" />
              </a>
              <a
                href="http://flavoroso.herokuapp.com/"
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
              <li>Sass</li>
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

        <div className="project casatoro-project">
          <figure className="project__img-wrapper">
            <a
              href="https://www.casatoroholidayspain.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                fluid={casatoro.childImageSharp.fluid}
                className="project__img"
                alt="casatoro hero"
              />
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>Casa Toro</h4>

            <div className="project__about">
              <p>
                Website built for a beautiful rental holiday house set by a
                designer-builder couple in the old town of Calpe in the Valencia
                region.
              </p>
            </div>

            <ul>
              <li>HTML</li>
              <li>Saas</li>
              <li>Bootstrap 4</li>
              <li>jQuery</li>
            </ul>

            <div className="project__links">
              <a
                href="https://www.casatoroholidayspain.com/"
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
