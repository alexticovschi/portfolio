import React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaFreeCodeCamp,
  FaCodepen,
  FaInstagram,
} from "react-icons/fa"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <ul>
          <li>
            <a href="https://github.com/alexticovschi" target="blank">
              <FaGithub className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alex-ticovschi/"
              target="blank"
            >
              <FaLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/alexticovschi" target="blank">
              <FaFreeCodeCamp className="icon" />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/AlexTicovschi" target="blank">
              <FaCodepen className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/alexticovschi.art/"
              target="blank"
            >
              <FaInstagram className="icon" />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer__text">Built by Alex Ticovschi</p>
    </footer>
  )
}

export default Footer
