import React from 'react'

class Item extends React.Component {
  render() {
    const { title, description, image} = this.props;
    return (
      <div>
        <img src={image}/>
        <h4>Title: {title}</h4>
        <p>About the project {description}</p>
      </div>
    )
  }
}

export default Item