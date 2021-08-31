import React from "react"

import { PageLayout } from "../layouts"
import { ContactForm } from "../components/Forms"

const Contact = () => {
  return (
    <PageLayout>
      <section className="hero is-fullheight is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered is-centered">
              <div className="column is-two-thirds">
                <div className="content">
                  <h1 className="title">Let’s build something great together</h1>
                  <p>Whatever your ambition, we’d love to design and build your next big idea or lend a hand on an existing one.</p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Contact