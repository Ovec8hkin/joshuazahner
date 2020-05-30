import React from "react"

import Layout from "../components/layout"
import {graphql} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/software.css'

import PillTags from '../components/PillTags'

function ResearchPage({data}) {
  const project_details = data.markdownRemark.frontmatter

  return (
    <Layout pageTitle={project_details.title}>
      <PillTags tags={project_details.tags}/>
      <img className={"featured"} src={project_details.image.childImageSharp.sizes.src}/>
      <div className={"container-hz content-container text-left"}>
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

