import React from "react"
import "./ToggleButton.scss"

const DrawerToggleButton = ({ isOpen, click }) => {
  return (
    <div
      onClick={click}
      className={isOpen ? "animate toggle-button" : "toggle-button"}
    >
      <div className="toggle-button__bar1"></div>
      <div className="toggle-button__bar2"></div>
      <div className="toggle-button__bar3"></div>
    </div>
  )
}

export default DrawerToggleButton
