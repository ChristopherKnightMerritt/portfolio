import React from "react"
import Layout from '../components/layout/layout.js'
import Navbar from '../components/navbar/navbar.js'
import Footer from '../components/footer/footer.js'
import About from '../components/about/about.js'
import Projects from '../components/projects/projects.js'
import Contact from '../components/contact/contact.js'

import backgroundImg from '../assets/rainier.jpg'

//Todo: Fixed image on mobile
let divStyle = {
  backgroundImage: 'url('+backgroundImg+')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center'
}

export default () => (
  <Layout>
    <div style={divStyle}>
      <Navbar />
      <div><About /></div>
      <div><Projects /></div>
      <div><Contact /></div>
      <Footer />
    </div>
  </Layout>
)
