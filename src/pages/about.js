import React from "react"

import Layout from "../components/layout"
import {graphql} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css'
import '../css/about.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faTwitter, faGithub, faFacebook} from "@fortawesome/free-brands-svg-icons"

import Img from 'gatsby-image'

import about from '../images/about.jpg'

console.log(about)

const ResearchIndexPage = ({data}) => (
  <Layout pageTitle={'About Me'} active={"About"}>
    <div className={"container-hz content-container text-left"}>
      <div className={"content"}>
        <p>I picked up programming after joining my highschool FIRST robotics team in 2014, and quickly fell in love with software development. I progressed from writing simple autonomous control programs for my team's annual robot, to designing websites in raw HTML, CSS, and javascript (this sounds like a downgrade, but I can assure you it's not), in the good ol' days before React, Vue, Node, and the rest of the modern javascript ecosystem emerged. I continued to develop websites and even a few mobile apps for the next four years of high school.</p>
        <p>In August 2017, I started at the University of Miami as a marine science and computer science double major. I have loved the ocean and all of the wildlife in it for as long as I can remember, and UM provided one of the very few programs where I could follow that passion in addition to the more stable field of computer science. I quickly found that my computational background and development skills were highly sought after in the ocean sciences domain, and so I began my journey into developing software for applications in the sciences.</p>
        <p>Outside of programming and science, I greatly enjoy traveling to and experiencing each of America's National Parks, which make up a majority of my body of photographic work. I also spend extensive time reading (mostly science fiction and fantasy, but I throw some environmental non-fiction in there to mix things up every once in a while) and watching NHL hockey (Let's Go Blues!).</p>
      </div>
      <div className={'sidebar'}>
        <img src={about} />
      </div>
    </div>

    <div className={"separate"}>
      <h3>Contact me</h3>
      <div className={"inline"}>
        <a href={"mailto:joshuazahner@gmail.com"} className={"social-link"}>
          <FontAwesomeIcon icon={faEnvelope} size={"2x"}/>
        </a>
        <a href={"https://twitter.com/JoshuaZahner"} className={"social-link"}>
          <FontAwesomeIcon icon={faTwitter} size={"2x"}/>
        </a>
        <a href={"https://github.com/Ovec8hkin"} className={"social-link"}>
          <FontAwesomeIcon icon={faGithub} size={"2x"}/>
        </a>
        <a href={"https://www.facebook.com/joshua.zahner.7"} className={"social-link"}>
          <FontAwesomeIcon icon={faFacebook} size={"2x"}/>
        </a>
      </div>
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
