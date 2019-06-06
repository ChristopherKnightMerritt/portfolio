import React from 'react'
import logo from '../../assets/ChrisM-01.png'

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul id='navbar'>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Projects</a></li>
          <li id='logoItem'><a href='#'><img id='navLogo' src={logo} alt='Chris Merritt Logo' /></a></li>
          <li><a href='#'>Resume</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar