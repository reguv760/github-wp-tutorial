import React from "react"
import Helmet from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const favIcon = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpFavicon {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href={props.allWordpressWpFavicon.edges[0].node.url.source_url}
        ></link>
      </Helmet>
    )}
  />
)

export default favIcon
