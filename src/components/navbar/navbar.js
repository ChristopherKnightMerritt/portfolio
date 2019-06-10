import React from 'react'
import logo from '../../assets/ChrisM-01.png'
import pdf from '../../assets/resume.pdf'
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul id='navbar'>
          <li><a href='/#'>About</a></li>
          <li><a href='/#projects'>Projects</a></li>
          <li id='logoItem'><a href='/#'><img id='navLogo' src={logo} alt='Chris Merritt Logo' /></a></li>
          <li><a href={pdf}>Resume</a></li>
          <li><a href='/#contact'>Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar