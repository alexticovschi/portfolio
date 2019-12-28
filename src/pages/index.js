import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Work from "../components/Work/Work"
import Links from "../components/Links/Links"
import Email from "../components/Email/Email"
import Contact from "../components/Contact/Contact"

const IndexPage = () => (
  <main className="container">
    <Layout>
      <Links />
      <Email />
      <Hero />
      <About />
      <Work />
      <Contact />
    </Layout>
  </main>
)

export default IndexPage
