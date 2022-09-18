import { Link } from "gatsby"
import React from "react"

function Navbar() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h4>Navigation Section</h4>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            gap: "2rem",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
