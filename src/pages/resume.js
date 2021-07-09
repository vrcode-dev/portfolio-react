import React from "react"
import Layout from "../components/layout"
import pdf from "../uploads/James_Rathahao-resume.pdf"

const ResumePage = () => {
  return (
    <Layout>
      <iframe
        src={pdf}
        frameBorder="0"
        scrolling="auto"
        height="1080"
        width="100%"
      />
    </Layout>
  )
}

export default ResumePage
