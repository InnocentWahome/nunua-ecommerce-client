import React, { useState } from "react"
import { Link } from "gatsby"

const Footer = () => {
  const [year] = useState(new Date().getFullYear())

  return (
    <footer
      className="footer has-background-dark has-text-white is-spaced is-fixed-bottom"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div>
                <h6 className="heading">Take your product to the next level</h6>
                <h3>Let’s build together.</h3>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button className="button is-primary is-rounded">
                Connect with us
              </button>
            </div>
          </div>
        </div>

        <div className="columns ">
          <div className="column is-one-quater">
            <div>
              <h3 className="menu-label has-text-white">Services</h3>
              <ul className="menu-list has-text-white">
                <li>
                  <Link className="has-text-white">Product Strategy</Link>
                </li>
                <li>
                  <Link className="has-text-white">Product Design</Link>
                </li>
                <li>
                  <Link className="has-text-white">Engineering</Link>
                </li>
                <li>
                  <Link className="has-text-white">Testing and QA</Link>
                </li>
                <li>
                  <Link className="has-text-white">Project Management</Link>
                </li>
                <li>
                  <Link className="has-text-white is-hovered ">
                    Training and Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div>
              <h3 className="menu-label has-text-white">Company</h3>
              <ul className="menu-list">
                <li>
                  <Link to="/" className="has-text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/work/" className="has-text-white">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/why-kisokolab/" className="has-text-white">
                    Why Kisokolab
                  </Link>
                </li>
                <li>
                  <Link to="/blog/" className="has-text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact/" className="has-text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div>
              <h3 className="menu-label has-text-white">Connect</h3>
              <ul className="menu-list">
                <li>
                  <Link to="/contact/" className="has-text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com" className="has-text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/kisokolab"
                    className="has-text-white"
                  >
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link to="https://facebook.com" className="has-text-white">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link className="has-text-white">Github</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="level">
          <div className="level-left">
            <div className="level-item"></div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="has-text-right">
                <h6>Copyright © {year} Kisokolab, Inc. All rights reserved.</h6>
                <Link
                  to="/terms-of-service-and-privacy-policy/"
                  className="has-text-white"
                >
                  Terms of Service and Privacy Policy.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
