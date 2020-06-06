import React from "react"

import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/blog.css'

import test from "../images/background-header.jpg"
import ImageItem from "../components/ImageItem"
import * as PropTypes from "prop-types"

class FeaturedPost extends React.Component {
  render() {
    return(
      <article className={"featured"}>
        <img className={"feature-image"} src={test}/>
        <div className={"image-content"}>
          <h3 className={"title"}>{this.props.post_data.title}</h3>
          <h5 className={"date"}>{this.props.post_data.date}</h5>
          <p><i>{this.props.post_data.blurb}</i></p>
          <Link to={this.props.post_data.path} className={"btn btn-primary btn-sm"}>Continue Reading</Link>
        </div>
      </article>
    )
  }
}

FeaturedPost.propTypes = { data: PropTypes.any }

class BlogIndexPage extends React.Component{

  constructor() {
    super();
    this.state={showFeatured: true}
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkDimensions.bind(this))
  }

  checkDimensions(){
    this.setState({showFeatured: window.innerWidth > 576})
  }

  render() {
    const first = this.props.data.allMarkdownRemark.edges[0].node.frontmatter
    return (
      <Layout pageTitle={'From Docker to Dolphins'} active={"Blog"}>
        { this.state.showFeatured ?  <FeaturedPost post_data={first} /> : null}
        <div className={"container-fluid container-hz separate item-box"}>
          {
            this.props.data.allMarkdownRemark.edges.map((post, index) => {
              const data = post.node.frontmatter
              if(index === 0 && this.state.showFeatured){
                return
              }
              return(
                <ImageItem projectTitle={data.title}
                           projectBlurb={data.blurb}
                           image={data.image.childImageSharp.sizes.src}
                           tags={data.tags}
                           link={data.path}
                           moretext={"Continue Reading"}
                />
              )
            })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndexPage

export const pageQuery = graphql`
  query{
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {fileAbsolutePath: {regex: "/(blog)/"  }}
    ){
      edges {
        node {
          frontmatter{
            path
            title
            date
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
