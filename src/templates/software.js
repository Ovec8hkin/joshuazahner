import React from "react"

import Layout from "../components/layout"
import {graphql} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/software.css'

import PillTags from '../components/PillTags'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGlobe} from "@fortawesome/free-solid-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"

function SoftwarePage({data}) {
  const project_details = data.markdownRemark.frontmatter

  return (
    <Layout pageTitle={project_details.title}>
      <PillTags tags={project_details.tags}/>
      <img className={"featured"} src={project_details.image.childImageSharp.sizes.src}/>
      <div className={"container-hz content-container"}>
        <div className={"content"}
             dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
        <div className={"sidebar"}>
          <p><span className={"bold"}>Project Dates:</span> {project_details.date}</p>
          <p><span className={"bold"}>Project Type:</span> {project_details.type}</p>
          <p><span className={"bold"}>Technologies:</span> Python, Dask</p>

          <p><FontAwesomeIcon icon={faGlobe} /><a href={project_details.url}>Website</a></p>
          <p><FontAwesomeIcon icon={faGithub} /><a href={project_details.repo}>GitHub Repository</a></p>
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
        image{
          childImageSharp {
            sizes(maxWidth: 1140) {
              src
            }
          }
        }
      }
    }
  }
`

export default SoftwarePage

