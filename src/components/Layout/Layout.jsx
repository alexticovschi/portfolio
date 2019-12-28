import React from "react"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import HeadRoom from "react-headroom"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <HeadRoom>
        <Nav />
      </HeadRoom>
      {children}
      <Footer />
    </>
  )
}

export default Layout
