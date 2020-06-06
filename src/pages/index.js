import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Item from "../components/ItemBox"
import StyledName from "../components/StyledName"

import profile from '../images/profile.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css'
import Footer from "../components/footer"

import {faCode, faCamera, faFlask} from "@fortawesome/free-solid-svg-icons"

const IndexPage = () => (
  <div id={"root"}>
    <SEO title={"Home"}/>
    <section className={"background header"}>
      <div className={"container-fluid container-hz container-center"}>
        <div className={"image-container"}>
          {/*<img className={"round"} id={"profile"} src={"#"} alt={""}/>*/}
        </div>
        <div>
          <h1 className={'display-4'}>
            <StyledName/>
          </h1>
          <h4>A software developer, <span className={"light"}>for scientists.</span></h4>
        </div>
      </div>
    </section>
    <section className={"container container-vt"} id={"content"}>
      <h2 className={"text-center big-line"}>I am a software developer</h2>
      <h2 className={"text-center big-line"}>specializing in the design of applications</h2>
      <h2 className={"text-center big-line"}>for use in the biological, earth, and ocean sciences.</h2>
      <Link to={"/about"} className={"btn btn-primary btn-lg"}>About Me</Link>
      <div className={"container-fluid container-hz separate item-box"}>
        <Item title={"Software"}
              short={
                "I specialize in the development of web and desktop applications" +
                " as well as desktop CLI software."
              }
              icon={faCode}
              link={"/software/"}
        />
        <Item title={"Research"}
              short={
                "I perform scientific research in the marine sciences with a specific " +
                "focus on computational ecology."
              }
              icon={faFlask}
              link={"/research/"}
        />
        <Item title={"Photography"}
              short={
                "I photograph landscapes and wildlife throughout the world as an " +
                  "additional hobby."
              }
              icon={faCamera}
              link={"/photos/"}
        />
      </div>
    </section>
    <section className={"background header"}>
      <div className={"container container-vt"}>
        <h1 className={'display-4 bold text-center'}>
          From Docker to Dolphins
        </h1>
        <h4 className={"separate text-center"}>The go to blog for a mix of programming, ocean science, and conservation
          topics.</h4>
        <Link to={"/blog"} className={"btn btn-primary"}>Read the blog</Link>
      </div>
    </section>
    <Footer/>
  </div>
)

export default IndexPage
