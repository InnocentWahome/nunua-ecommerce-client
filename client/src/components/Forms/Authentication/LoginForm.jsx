import React from "react"

const ContactForm = () => {
  return (
    <form>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Name" />
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="email" placeholder="Email" />
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Company" />
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Phone number" />
            </p>
          </div>
        </div>
      </div>

      <div className="field">
        <textarea placeholder="How can we help?" className="textarea"></textarea>
      </div>

      <div className="field">
        <button className="button is-black is-rounded" type="submit">Connect with us</button>
      </div>
    </form>
  )
}

export default ContactForm