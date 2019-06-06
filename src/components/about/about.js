import React from 'react'
import headshot from '../../assets/ChrisB&W.png'
import downIcon from '../../assets/cheveron-down.svg'
class About extends React.Component {
  render() {
    return (
      <div id='mainAbout'>
        <section className='aboutSection'>
          <section id='picSection'>
            <img id='profilePic' src={headshot} alt='Headshot'/>
          </section>
          <section id='textSection'>
            <h1>Chris Merritt</h1>
            <h2>Software Developer</h2>
            <p>Full stack JavaScript developer with experience in GIS technologies. Graduate from the University of Redlands</p>
          </section>
        </section>
        <div id='downIcon'><img id='downImg'src={downIcon}/></div>
        </div>
    )
  }
}

export default About