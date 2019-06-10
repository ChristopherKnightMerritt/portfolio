import React from 'react'
// import headshot from '../../assets/chrisSmaller.png'

import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const About = (props) => (
  <StaticQuery query={graphql`
  query{
    profileImg: file(relativePath: { eq: "chrisSmaller.png" }){
      childImageSharp {
        fluid(maxWidth: 1000){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `}
  render={data => {
    const imageData = data.profileImg.childImageSharp.fluid
  // render() {
    return (
      <div id='mainAbout'>
        <section className='aboutSection'>
          <section id='picSection'>
            <Img className='profilePic' fluid={imageData} />
          </section>
          <section id='textSection'>
            <h1>Chris Merritt</h1>
            <h2>Software Developer</h2>
            <p>Full stack JavaScript developer with experience in GIS technologies. Graduate from the University of Redlands</p>
          </section>
        </section>
        </div>
     )
    }}
    />
)

export default About
