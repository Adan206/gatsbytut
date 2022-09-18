import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Contact from "../pages/Contact"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
      <Footer />
    </>
  )
}

export default Layout
