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

import mintpy from '../images/mintpy.png'

function ResearchPage({data}) {
  const project_details = data.markdownRemark.frontmatter

  return (
    <Layout pageTitle={project_details.title}>
      <PillTags tags={project_details.tags}/>
      <img className={"featured"} src={project_details.image.childImageSharp.sizes.src}/>
      <div className={"container-hz content-container"}>
        <div className={"content"} style={{borderRight: "none"}}
             dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
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
        tags
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

export default ResearchPage

