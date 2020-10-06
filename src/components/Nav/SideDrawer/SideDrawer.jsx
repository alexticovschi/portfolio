import React from "react"
import { withPrefix } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import "./SideDrawer.scss"

const SideDrawer = ({ show, click }) => {
  const scrollAndCloseSideDrawer = id => {
    click()
    scrollTo(id)
  }

  return (
    <nav className={show ? "side-drawer open" : "side-drawer"}>
      <ul className="side-drawer__links">
        <li>
          <button
            className="side-drawer__link"
            onClick={() => scrollAndCloseSideDrawer("#about")}
          >
            About
          </button>
        </li>
        <li>
          <span className="side-drawer__dot"></span>

          <button
            className="side-drawer__link"
            onClick={() => scrollAndCloseSideDrawer("#work")}
          >
            Work
          </button>
        </li>
        <li>
          <span className="side-drawer__dot"></span>

          <button
            className="side-drawer__link"
            onClick={() => scrollAndCloseSideDrawer("#contact")}
          >
            Contact
          </button>
        </li>
        <a
          onClick={click}
          className="side-drawer__link-resume"
          href={withPrefix("/alex-ticovschi-cv.pdf")}
          target="_blank"
        >
          <button className="side-drawer__resume-btn">View CV</button>
        </a>
      </ul>
    </nav>
  )
}

export default SideDrawer
