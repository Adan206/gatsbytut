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
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/Tags">Tags</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
