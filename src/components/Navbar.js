import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <Link to="/">
            <div
              // role="button"
              // onClick={() => scrollTo("#home")}
              className="name"
              tabIndex={0}
            >
              James Rathahao
            </div>
            <div className="subheading">Web Developer</div>
          </Link>

          <div className="links-wrapper">
            <Link to="/about">About</Link>
            <Link to="/work">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
