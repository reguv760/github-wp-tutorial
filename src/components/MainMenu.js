import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery, Link } from "gatsby"

import SiteInfo from "./SiteInfo"

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: rgb(3, 27, 77);
`

const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%;
`

//this is how you style a Gatsby link
//with styled-components
const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 16px 16px;
`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main Menu" } }
        ) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenuWrapper>
        <MainMenuInner>
          <SiteInfo />
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            menuItem => (
              <MenuItem to={menuItem.object_slug} key={menuItem.title}>
                {menuItem.title}
              </MenuItem>
            )
          )}
        </MainMenuInner>
      </MainMenuWrapper>
    )}
  />
)

export default MainMenu
