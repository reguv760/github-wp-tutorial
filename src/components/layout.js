/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import MainMenu from "./MainMenu"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');
  
  body { 
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
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
      <div>
        <Helmet>
          <link
            rel="icon"
            type="image/png"
            href={props.allWordpressWpFavicon.edges[0].node.url.source_url}
          ></link>
        </Helmet>
        <GlobalStyles />
        <MainMenu />
        <LayoutWrapper>{children}</LayoutWrapper>
      </div>
    )}
  />
)

export default Layout
