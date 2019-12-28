import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./hero.scss"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p>Hi, my name is</p>
        <h1>Alex Ticovschi</h1>
        <h2>I build things for the web.</h2>
        <p>
          I'm a Front End Developer based in London, UK. You can check out my
          work below.
        </p>

        <button className="hero__btn" onClick={() => scrollTo("#work")}>
          Portfolio
        </button>
      </div>
    </section>
  )
}

export default Hero
