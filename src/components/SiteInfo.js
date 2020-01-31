import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const SiteInfoWrapper = styled.div`
  flex-glow: 1;
  color: white;
  margin: auto 0;
  width: 100%;
`
const SiteTitle = styled.div`
  font-weight: bold;
`

const SiteLogo = styled.img`
  max-width: 25%;
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
      <SiteInfoWrapper>
        <SiteLogo
          src={props.allWordpressWpLogo.edges[0].node.url.source_url}
          alt="Site Logo"
        />
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
