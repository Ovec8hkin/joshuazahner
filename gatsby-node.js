/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const softwareTemplate = require.resolve(`./src/templates/software.js`)
  const researchTemplate = require.resolve(`./src/templates/research.js`)

  const software_result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        filter: {fileAbsolutePath: {regex: "/(software)/"  }}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  const research_result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        filter: {fileAbsolutePath: {regex: "/(research)/"  }}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (software_result.errors || research_result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  software_result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: softwareTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.path,
      },
    })
  })

  research_result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: researchTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.path,
      },
    })
  })
}