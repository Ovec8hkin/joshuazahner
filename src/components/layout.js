/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../css/layout.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import SEO from "./seo"
import Footer from "./footer"

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id={"root"}>
      <SEO title={pageTitle} />
      <Header siteTitle={data.site.siteMetadata.title} active={pageTitle}/>
      <div className={"container"}>
        <h1 className={'display-5 bold'}>{pageTitle}</h1>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
