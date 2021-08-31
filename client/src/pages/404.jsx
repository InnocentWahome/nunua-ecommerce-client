import React from "react"
import { Link } from "gatsby"

import { PageLayout } from "../layouts"

import Error404 from "../assets/images/404Error.svg"

const NotFoundPage = () => (
  <PageLayout>
    <section className="hero is-fullheight is-primay">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered is-vcentered">
            <div className="column is-half">
              <figure className="image is-4by3">
                <img src={Error404} alt="404 Error"/>
              </figure>
              <div className="content has-text-centered">
                <h1>PAGE NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                <Link to="/" className="button is-primary is-rounded">Go back home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
)

export default NotFoundPage

