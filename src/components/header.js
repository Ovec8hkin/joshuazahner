import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../css/header.css'
import StyledName from "./StyledName"

class NavItem extends React.Component {
  render() {
    return <li className="nav-item">
      <Link className={`nav-link ${this.props.active === this.props.title ? "bold" : ""}`}
            to={this.props.link}>{this.props.title}</Link>
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
        <NavItem title={"Home"}         active={active}   link={"/"}/>
        <NavItem title={"About"}        active={active}   link={"/about"}/>
        <NavItem title={"Research"}     active={active}   link={"/research"}/>
        <NavItem title={"Software"}     active={active}   link={"/software"}/>
        <NavItem title={"Photography"}  active={active}   link={"/photography"}/>
        <NavItem title={"Blog"}         active={active}   link={"/blog"}/>
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
