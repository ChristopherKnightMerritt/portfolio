import React from 'react'
import linkedIn from '../../assets/linkedInIcon.svg'
import gitHub from '../../assets/githubIcon.svg'
import gmail from '../../assets/gmailIcon.svg'

class Contact extends React.Component {
  render() {
    return (
      <>
        <div id='contactContainer'>
          <h2 id='contactTitle'>Contact Me:</h2>
          <div className='nestContainer'>
            <p>I am currently looking for new opportunities, please reach out if you would like to chat!</p>
          </div>
          <div className='nestContainer'>
            <a href='https://www.linkedin.com/in/christopherknightmerritt/'><img src={linkedIn} alt='linkedin link to linkedin.com/in/christopherknightmerritt/'/></a>
            <a href='https://github.com/ChristopherKnightMerritt'><img src={gitHub} alt='github link to @christopherknightmerritt'/></a>
            <a href='mailto:chris.merritt95@gmail.com'><img src={gmail} alt='email link to chris.merritt95@gmail.com'/></a>
          </div>
        </div>
      </>
    )
  }
}

export default Contact