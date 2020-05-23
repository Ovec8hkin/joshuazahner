import React from "react"

import '../css/footer.css'

class Footer extends React.Component {
  render() {
    return <footer>
      © {new Date().getFullYear()} - Joshua Zahner
    </footer>
  }
}

export default Footer