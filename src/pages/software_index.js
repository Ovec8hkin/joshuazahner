import React from "react"

import Layout from "../components/layout"
import {graphql} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css'
import '../css/item.css'

import ImageItem from "../components/ImageItem"



const SoftwareIndexPage = ({data}) => (
  <Layout pageTitle={'Software'}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu pharetra sem. Integer imperdiet nisi
      dapibus turpis volutpat sagittis. Nunc eleifend nisl nunc, quis vestibulum ante convallis eu. Sed in est in dolor
      luctus scelerisque. Phasellus lorem lorem, commodo in efficitur eu, vehicula non augue. Nam elementum nisi sed
      orci blandit, sed placerat est lacinia. Etiam fringilla euismod pellentesque.</p>
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
    allMarkdownRemark {
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
