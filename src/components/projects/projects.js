import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Item from '../item/item.js'

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            item {
              title
              description
              image
              link
              skills
            }
          }
        }
      }
    `}
    render={data => (
      <div id='projects'>
      <h2 id='projectTitle'>Projects:</h2>
      <section id='projectsContainer'>
        {data.site.siteMetadata.item.map( (i) => 
          <Item data={i}/>
        )}
      </section>
      </div>
    )}
  />
)