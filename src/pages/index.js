import React from "react"
//import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO>
      <StaticQuery
        query={graphql`
          {
            allWordpressPage {
              edges {
                node {
                  id
                  title
                  content
                }
              }
            }
          }
        `}
        render={props => (
          <div>
            {props.allWordpressPage.edges.map(page => (
              <div key={page.node.id}>
                <h1>{page.node.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.node.content }} />
              </div>
            ))}
          </div>
        )}
      ></StaticQuery>
    </SEO>
  </Layout>
)

export default IndexPage
