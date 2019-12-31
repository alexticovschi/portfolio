import React, { useState } from "react"
import SideDrawer from "./SideDrawer/SideDrawer"
import Backdrop from "./Backdrop/Backdrop"
import Navbar from "./Navbar/Navbar"

const Nav = () => {
  const [sideDrawer, sideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    sideDrawerOpen(sideDrawer => !sideDrawer)
  }
  const backdropClickHandler = () => sideDrawerOpen(false)

  return (
    <>
      <Navbar
        isOpen={sideDrawer}
        drawerClickHandler={drawerToggleClickHandler}
      />
      <SideDrawer show={sideDrawer} click={backdropClickHandler} />
      {sideDrawer && <Backdrop click={backdropClickHandler} />}
    </>
  )
}

export default Nav
