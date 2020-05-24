import React from "react"

import Layout from "../components/layout"
import {graphql} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/software.css'

import PillTags from '../components/PillTags'
import mintpy from '../images/mintpy.png'

function SoftwareIndexPage({data}) {
  const project_details = data.markdownRemark.frontmatter

  return (
    <Layout pageTitle={project_details.title}>
      <PillTags tags={project_details.tags}/>
      <img className={"featured"} src={mintpy}/>
      <div className={"container-hz content-container"}>
        <div className={"content"}
             dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
        <div className={"sidebar"}>
          <p><span className={"bold"}>Project Dates:</span> {project_details.date}</p>
          <p><span className={"bold"}>Project Type:</span> {project_details.type}</p>
          <p><span className={"bold"}>Technologies:</span> Python, Dask</p>
          <p><a href={project_details.url}>Website</a></p>
          <p><a href={project_details.repo}>GitHub Repository</a></p>
        </div>
      </div>
    </Layout>
  )
}


export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        type
        status
        technologies
        tags
        url
        repo
      }
    }
  }
`

export default SoftwareIndexPage

