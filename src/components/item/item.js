import React from 'react'
import Curve from '../../assets/curvelogo.png'
import DailyPlanIt from '../../assets/dailyplanit.png'
import SlackLackey from '../../assets/slack-lackey.png'
import Panamapping from '../../assets/panamapping.png'
import StationLocation from '../../assets/stationlocation.png'

const images = [Panamapping, StationLocation, DailyPlanIt, SlackLackey, Curve]

class Item extends React.Component {
  render() {
    return (
      <div className='projectCard'>
        <a href={this.props.data.link}>
          <img className='projectImg' src={images[this.props.data.image]}/>
        </a>
        <h4>{this.props.data.title}</h4>
        <p>{this.props.data.description}</p>
        <p>Skills used: {this.props.data.skills}</p>
      </div>
    )
  }
}

export default Item