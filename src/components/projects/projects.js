import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SlackLackey from '../../assets/merritt.jpg'
import Panamapping from '../../assets/ChrisM-01.png'

const images = [SlackLackey, Panamapping]
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
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        {data.site.siteMetadata.item.map( (i) => 
          <>
          <h4>{i.title}</h4>
          <img src={images[i.image]} /> 
          <p>{i.description}</p>
          </>
        )}
      </header>
    )}
  />
)