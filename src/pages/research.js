import React from "react"

import Layout from "../components/layout"
import {graphql} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css'
import '../css/item.css'

import ImageItem from "../components/ImageItem"

const ResearchIndexPage = ({data}) => (
  <Layout pageTitle={'Research'} active={"Research"}>
    <p>I performed active scientific research throughout my time as an undergraduate at the University of Miami. Most of my early research projects were software development focused, though I also worked extensively with various particle tracking models to resolve fine-scale oceanographic structures and model population connectivity. My current research interests include population dynamics modeling for marine fisheries and at risk marine species.</p>
    <p>Below is a listing of some of my recent research projects:</p>
    <div className={"container-fluid container-hz separate item-box"}>
      {data.allMarkdownRemark.edges.map(research => {
        data = research.node.frontmatter
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

export default ResearchIndexPage

export const pageQuery = graphql`
  query{
    allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___title]}
      filter: {fileAbsolutePath: {regex: "/(research)/"  }}
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
