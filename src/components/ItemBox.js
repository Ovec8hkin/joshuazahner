import React from "react"

import { Link } from 'gatsby'

class Item extends React.Component {
  render() {
    return <div className={"item"}>
        <img className={"round"} src={""}/>
        <h3 className={"text-center"}>{this.props.title}</h3>
        <p>{this.props.short}</p>
        <Link to={this.props.link} className={"btn btn-primary"}>Learn More</Link>
    </div>
  }
}

export default Item;