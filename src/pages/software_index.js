import React from "react"

import Layout from "../components/layout"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css'
import '../css/item.css'
import Item from "../components/ItemBox"
import { Link } from "gatsby"
import mintpy from "../images/mintpy.png"
import ImageItem from "../components/ImageItem"



const SoftwareIndexPage = () => (
  <Layout pageTitle={'Software'}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu pharetra sem. Integer imperdiet nisi
      dapibus turpis volutpat sagittis. Nunc eleifend nisl nunc, quis vestibulum ante convallis eu. Sed in est in dolor
      luctus scelerisque. Phasellus lorem lorem, commodo in efficitur eu, vehicula non augue. Nam elementum nisi sed
      orci blandit, sed placerat est lacinia. Etiam fringilla euismod pellentesque.</p>
    <div className={"container-fluid container-hz separate item-box"}>
      <ImageItem projectTitle={"MintPy"}
                 projectBlurb={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu pharetra sem."}
                 image={mintpy}
                 tags={["Python", "parallel", "CLI Tool"]}
      />
      <ImageItem projectTitle={"joshuazahner.com"}
                 projectBlurb={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu pharetra sem."}
                 image={mintpy}
                 tags={["Gatsby", "GraphQL", "Website"]}
      />
      <ImageItem projectTitle={"Miami GeoHazards"}
                 projectBlurb={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu pharetra sem."}
                 image={mintpy}
                 tags={["React", "Flask API", "Website"]}
      />
      <ImageItem projectTitle={"Miami GeoHazards"}
                 projectBlurb={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu pharetra sem."}
                 image={mintpy}
                 tags={["React", "Flask API", "Website"]}
      />
    </div>
  </Layout>
)

export default SoftwareIndexPage
