import React from "react"
import "./about.scss"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <h1 className="about__title">About Me</h1>
        <p className="about__text">
          I am a technology enthusiast with a positive mindset and a wild desire
          to learn new things. Since beginning my journey as a Front End
          Developer, I have continuously worked to improve my skills to solve
          all the problems I encountered in my projects.
        </p>
        <p className="about__text">
          Web development has never been "just a passion" for me.It has offered
          an engaging challenge to continuously learn and improve my skills in
          creating better websites or web apps. What started with just a
          curiosity of building something has become a full-fledged passion that
          only makes me more interested as the years go by.
        </p>
        <p className="about__text">
          I am a motivated developer with skills in HTML5, CSS3, Sass,
          JavaScript, jQuery, Bootstrap, React, Gatsby.js, Next.js, Node.js,
          MongoDB, MySQL. I’m also confident with backend frameworks like
          Laravel, API & PHP development.
        </p>
      </div>
    </section>
  )
}
export default About
