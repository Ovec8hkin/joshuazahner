import React from "react"

import { Link } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Item extends React.Component {
  render() {
    return <div className={"item"}>
        <FontAwesomeIcon icon={this.props.icon} size={"4x"} />
        <h3 className={"text-center"}>{this.props.title}</h3>
        <p>{this.props.short}</p>
        <Link to={this.props.link} className={"btn btn-primary"}>Learn More</Link>
    </div>
  }
}

export default Item;