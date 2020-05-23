import React from "react"
import { Link } from "gatsby"

class ImageItem extends React.Component {
  render() {
    return <div className={"item item-image"}>
      <img className={"img-head"} src={this.props.image}/>
      <div className={"container-padded"}>
        <h3>{this.props.projectTitle}</h3>
        <hr/>
        <ul className="nav nav-pills nav-fill">

          {
            this.props.tags.map((value, index) => {
              return <li className="nav-item" key={index}>
                <p className="nav-link active" >{value}</p>
              </li>
            })
          }

        </ul>
        <p>{this.props.projectBlurb}</p>
        <Link to={this.props.link} className={"btn btn-primary btn-sm"}>Learn More</Link>
      </div>
    </div>
  }
}

export default ImageItem