import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const SiteLogoStyle = styled.img`
  max-width: 15%;
`

const Logo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpLogo {
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
      <SiteLogoStyle
        src={props.allWordpressWpLogo.edges[0].node.url.source_url}
        alt="Logo"
      />
    )}
  />
)

export default Logo
