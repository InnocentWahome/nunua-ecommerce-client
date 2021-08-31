import React from "react"
import { Link } from "gatsby"

const Navbar = props => {
  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active")
  }

  return (
    <nav className="navbar is-spaced is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="https://bulma.io/images/bulma-logo.png" alt="kisokolab" />
        </Link>

        <button
          className="navbar-burger burger has-background-primary"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true" className="has-textwhite"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        id="navbarBasic"
        className="navbar-menu has-background-primary has-text-centered pt-4"
      >
        <div className="navbar-end ">
          <Link
            to="/"
            className="navbar-item  has-text-white"
            onClick={toggleBurgerMenu}
          >
            Services
          </Link>
          <Link
            to="/work/"
            className="navbar-item  has-text-white"
            onClick={toggleBurgerMenu}
          >
            Work
          </Link>
          <Link
            to="/why-kisokolab/"
            className="navbar-item  has-text-white"
            onClick={toggleBurgerMenu}
          >
            Why Kisokolab
          </Link>
          <Link
            to="/blog/"
            className="navbar-item  has-text-white"
            onClick={toggleBurgerMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact/"
            className="navbar-item  has-text-white"
            onClick={toggleBurgerMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
