import React from "react"
import Layout from '../components/layout/layout.js'
import Navbar from '../components/navbar/navbar.js'
import Footer from '../components/footer/footer.js'
import About from '../components/about/about.js'
import Projects from '../components/projects/projects.js'
import Contact from '../components/contact/contact.js'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

//Todo: Fixed image on mobile
let divStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  
}

export default (props) => (
  <StaticQuery query={graphql`
    query{
      bgImg: file(relativePath: { eq: "rainier.jpg" }){
        childImageSharp {
          fluid(maxWidth: 1000){
             ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
  render={data => {
  const imageData = data.bgImg.childImageSharp.fluid
  return (
    <BackgroundImage Tag="section"
      fluid={imageData}
      id='mainBackground'
      style={divStyle}
      alt='Mt Rainier at sunset'
      backgroundColor={`#040e18`}
      >
    <Layout>
      <div id='main'>
        <Navbar />
        <div><About /></div>
        <div><Projects /></div>
        <div><Contact /></div>
        <Footer />
      </div>
  </Layout>
  </BackgroundImage>
  )
  }}
  />
)