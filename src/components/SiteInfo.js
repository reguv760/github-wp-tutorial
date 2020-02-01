import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import SiteLogo from "./logo"

const SiteInfoWrapper = styled.div`
  flex-glow: 1;
  color: white;
  margin: auto 0;
  width: 100%;
`
const SiteTitle = styled.div`
  font-weight: bold;
`

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        <SiteLogo />
        <SiteTitle>
          <div
            dangerouslySetInnerHTML={{
              __html: props.allWordpressSiteMetadata.edges[0].node.name,
            }}
          />
        </SiteTitle>

        <div
          dangerouslySetInnerHTML={{
            __html: props.allWordpressSiteMetadata.edges[0].node.description,
          }}
        />
      </SiteInfoWrapper>
    )}
  />
)

export default SiteInfo
