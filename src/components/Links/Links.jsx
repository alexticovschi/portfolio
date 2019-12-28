import React from "react"
import "./links.scss"
import {
  FaGithub,
  FaLinkedin,
  FaFreeCodeCamp,
  FaCodepen,
  FaInstagram,
} from "react-icons/fa"

const Links = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <a href="https://github.com/alexticovschi" target="blank">
            <FaGithub className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alex-ticovschi/" target="blank">
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
          <a href="https://www.instagram.com/alexticovschi.art/" target="blank">
            <FaInstagram className="icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Links
