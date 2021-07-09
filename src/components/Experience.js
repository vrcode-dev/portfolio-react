import React from "react"
import data from "../yourdata"

const Experience = () => {
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="experience-container">
          {data.experince.map((project, index) => (
            <div className="experience">
              <h2>{project.company}</h2>
              <h3>{project.jobTitle}</h3>
              <ul>
                {project.responsibilities.map(list => (
                  <li>{list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
