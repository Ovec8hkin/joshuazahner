import React from "react"

class PillTags extends React.Component {
  render() {
    return(
      <ul className="nav nav-pills nav-fill left-align">
        {this.props.tags.map(tag => {
          return(
            <li className="nav-item">
              <p className="nav-link active">{tag}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default PillTags