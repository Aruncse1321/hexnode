import { useState } from "react";
import logo from "../assets/image 24.png";
import laptops from "../assets/image 25.png"
import "../styles/Header.css"

const Header = () => {
  const[active,setActive] =useState(true)
  return (
    <div className="Header">
      <div className= { active ?"header-top" : "header-top active"}>
        <div className="container" id="top-content">
          <img src={logo} alt="logo" />
          <div className="free-trail">
            <p><span>New Launch:</span>Hexnode FlexiDMS for multi-brand distributors</p>
            <button className="btn">14 DAY FREE TRAIL</button>

          </div>

        </div>
      </div>
      <a className="menu-btn"><img
        src="/images.png"
        alt="menu"
        onClick={() => setActive(!active)}

      /></a>
      <div className="header-bottom">
        <div id="bottom-content" className="container">
          <div className="left-content">
            <h1>Turn your devices into kiosks in a few minutes
              with <span>Hexnode UEM</span></h1>
            <p>Enhance supply chain visibility and optimize distribution efficiency while
              gaining valuable insights.</p>
            <div className="buttons">
              <button className="btn">Get started Now!</button>
              <button className="btn">Watch video</button>
            </div>
          </div>
          <img className="right-content" src={laptops} alt="laptops" />
        </div>
      </div>
    </div>

  )
}

export default Header
