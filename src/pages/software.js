import React from "react"

import Layout from "../components/layout"
import {graphql} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css'
import '../css/item.css'

import ImageItem from "../components/ImageItem"



const SoftwareIndexPage = ({data}) => (
  <Layout pageTitle={'Software'} active={"Software"}>
    <p>I work on web and desktop applications for use in a variety of scientific disciplines. A significant portion of my software is developed in Python -- as it is easy for other scientists to use, deploy, and modify -- though I also use javascript for projects requiring web based components, as well as Go for server intense applications.</p>
    <p>Below is a listing of my recent projects:</p>
    <div className={"container-fluid container-hz separate item-box"}>
      {data.allMarkdownRemark.edges.map(software => {
        data = software.node.frontmatter
        return <ImageItem projectTitle={data.title}
                          projectBlurb={data.blurb}
                          image={data.image.childImageSharp.sizes.src}
                          tags={data.tags}
                          link={data.path}
        />
      })}
    </div>
  </Layout>
)

export default SoftwareIndexPage

export const pageQuery = graphql`
  query{
    allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___title]}
      filter: {fileAbsolutePath: {regex: "/(software)/"  }}
    ){
      edges {
        node {
          frontmatter{
            path
            title
            tags
            blurb
            path
            image {
              childImageSharp {
                sizes(maxWidth: 1140) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
