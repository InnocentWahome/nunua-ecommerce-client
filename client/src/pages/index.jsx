import React from "react"

import { PageLayout } from "../layouts"

const IndexPage = () => {
  return (
    <PageLayout>
      <section className="hero is-fullheight is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered is-centered">
              <div className="column is-one-third">
                <div className="content">
                  <h1 className="title">Hello World</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default IndexPage
