import React from "react"

import Layout from "../components/Layout.js"
import { StaticImage } from "gatsby-plugin-image"
// import Images from "../examples/Images"
import FetchData from "../examples/fetchData.js"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="the hero image"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>recipes</h1>
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
        </header>
        <FetchData />
      </main>
    </Layout>
  )
}
