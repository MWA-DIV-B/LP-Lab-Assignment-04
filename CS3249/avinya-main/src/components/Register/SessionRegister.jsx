import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import './Register.css'

const SessionRegister = () => {
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    phone: '',
    transactionid: '',
  })

  const handleSubmit2 = async (event) => {
    event.preventDefault()
    setSubmitted(true)
    const url = event.target.action

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: new FormData(event.target),
      })
      const data = await response.text()
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }

    const form = document.getElementById('sform')
    form.reset()
    setSubmitted(false)
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  return (
    <>
      <Navbar />

      <div className="form-space">
        <div class="form_wrapper">
          <div class="form_container">
            <div class="title_container">
              <h2>Registration Form for Guest Lecture</h2>
            </div>
            <div class="row clearfix">
              <div class="">
                <form
                  method="POST"
                  id="sform"
                  onSubmit={handleSubmit2}
                  action="https://script.google.com/macros/s/AKfycbwE60HUYhqQ4xxmK-nh9crGGLj8-UcgzXcVnPzn6BXCGKX3CVqoJCyYLGvIVLgECgkWsw/exec"
                >
                  <div class="input_field">
                    {' '}
                    <span>
                      <i aria-hidden="true" class="fa fa-user"></i>
                    </span>
                    <input
                      type="name"
                      name="Name"
                      placeholder="Name"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div class="input_field">
                    {' '}
                    <span>
                      <i aria-hidden="true" class="fa fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="input_field">
                    {' '}
                    <span>
                      <i class="fa-solid fa-building-columns"></i>
                    </span>
                    <input
                      type="name"
                      name="College"
                      placeholder="College"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="input_field">
                    {' '}
                    <span>
                      <i class="fa-solid fa-phone-volume"></i>
                    </span>
                    <input
                      type="name"
                      name="Phone"
                      placeholder="Phone"
                      onChange={handleChange}
                      required
                      pattern="[1-9]{1}[0-9]{9}"
                      maxlength="10"
                    />
                  </div>
                  <div class="input_field">
                    {' '}
                    <span>
                      <i class="fa-sharp fa-solid fa-receipt"></i>
                    </span>
                    <input
                      type="name"
                      name="Transaction Id"
                      onChange={handleChange}
                      placeholder="Transaction Id"
                      required
                    />
                  </div>

                  <div className="payment">
                    <img src="./images/payment.jpg" />
                    <h3>GPay/PhonePay:- 8956049304</h3>
                  </div>

                  {!submitted && (
                    <motion.button
                      className="s-register"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="submit"
                      class="button"
                    >
                      Register
                    </motion.button>
                  )}
                  {submitted && (
                    <p>
                      Form Submited Successfully <br /> You'll recieve
                      Comfirmation mail and Ticket soon.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SessionRegister
