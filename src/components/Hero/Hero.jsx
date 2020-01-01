import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./hero.scss"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__text hero__text--1">Hi, my name is</p>
        <h1 className="hero__name">
          Alex Ticovschi<span className="hero__dot"></span>
        </h1>
        <h2 className="hero__subtitle">
          I build things for the web<span className="hero__dot"></span>
        </h2>
        <p className="hero__text hero__text--2">
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
