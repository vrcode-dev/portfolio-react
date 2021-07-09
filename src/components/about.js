import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>A little bit about myself</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="about-container">
            <div className="about-grid">
              {data.about.map((about, index) => (
                <div className="about" key={index}>
                  <img src={about}></img>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default About
