import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import WorkSummary from "../components/WorkSummary"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Header></Header>
    <WorkSummary></WorkSummary>
    {/* <About></About>
    <Skills></Skills> */}
    {/* <Promotion></Promotion> */}
    <Contact />
  </Layout>
)

export default IndexPage
