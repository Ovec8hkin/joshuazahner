import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../css/header.css'
import StyledName from "./StyledName"

class NavItem extends React.Component {
  render() {
    return <li className="nav-item">
      <Link className={`nav-link ${this.props.active === this.props.title ? "bold" : ""}`}
            to={"#"}>{this.props.title}</Link>
    </li>
  }
}

const Header = ({ active }) => (
  <nav className="navbar navbar-expand-lg">
    <Link className={"navbar-brand"} to={"#"}>
      <h3>
        <StyledName />
      </h3>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavItem title={"Home"}         active={active} />
        <NavItem title={"About"}        active={active} />
        <NavItem title={"Research"}     active={active} />
        <NavItem title={"Software"}     active={active} />
        <NavItem title={"Photography"}  active={active} />
        <NavItem title={"Blog"}         active={active} />
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
