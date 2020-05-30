import React from "react"

import Layout from "../components/layout"
import {graphql} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../css/software.css'

import PillTags from '../components/PillTags'

function BlogPage({data}) {
  const blog_post = data.markdownRemark.frontmatter

  return (
    <Layout pageTitle={blog_post.title}>
      <h5><b>{blog_post.date}</b></h5>
      <PillTags tags={blog_post.tags}/>
      <img className={"featured"} src={blog_post.image.childImageSharp.sizes.src}/>
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
        date
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

export default BlogPage

