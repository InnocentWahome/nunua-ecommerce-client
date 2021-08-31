import React from "react"
import "../assets/sass/index.scss"

import { Navbar, Footer } from "../components/Shared"

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default PageLayout