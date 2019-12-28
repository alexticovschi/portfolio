import React from "react"
import "./about.scss"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <h1 className="about__title">About Me</h1>
        <p className="about__text">
          From the moment I was able to finish my first project,I knew I was
          hooked into the world of web development. Web development has never
          been "just a passion" for me.It has offered an engaging challenge to
          continuously learn and improve my skills in creating better websites
          or web apps.
        </p>
        <p>
          What started with just a curiosity of building something has become a
          full-fledged passion that only makes me more interested as the years
          go by I've been interested in coding for a few years, finally taking
          the decision in 2017 to invest my time to pursue this career path. To
          achieve this goal I have devoted a large proportion of my time over
          the past 2 years to studying HTML, CSS, JavaScript, ReactJS, Node.js
          and MySQL. See my portfolio for examples of some web based apps I've
          created.
        </p>
      </div>
    </section>
  )
}
export default About
