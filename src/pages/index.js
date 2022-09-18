import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout.js"

export default function Home() {
  return (
    <Layout>
      <h1>HOME</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quo quia
        reiciendis debitis veniam doloribus?
      </p>
      <div>
        <Link to="/About">
          <button>About</button>
        </Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
    </Layout>
  )
}
