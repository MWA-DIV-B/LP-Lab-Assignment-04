import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import './Register.css'

const Register = () => {
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    groupName: '',
    member1: '',
    member2: '',
    email: '',
    college: '',
    phone: '',
    transactionid: '',
  })

  const handleSubmit1 = async (event) => {
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

    const form = document.getElementById('eform')
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
              <h2>Event Registration Form</h2>
            </div>
            <div class="row clearfix">
              <div class="">
                <form
                  method="POST"
                  id="eform"
                  onSubmit={handleSubmit1}
                  action="https://script.google.com/macros/s/AKfycbxOyORcBBbh7sQmcdr7bNW9VnDbyqDHH9hKClaMvTTGDJ44S3Ffu3O6LCNaCeMa-4uWqw/exec"
                >
                  <div class="input_field">
                    {' '}
                    <span>
                      <i aria-hidden="true" class="fa fa-user-group"></i>
                    </span>
                    <input
                      type="name"
                      name="Group Name"
                      placeholder="Group Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="input_field">
                    {' '}
                    <span>
                      <i aria-hidden="true" class="fa fa-user"></i>
                    </span>
                    <input
                      type="name"
                      name="Member 1 Name"
                      placeholder="Member 1 Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="input_field">
                    {' '}
                    <span>
                      <i aria-hidden="true" class="fa fa-user"></i>
                    </span>
                    <input
                      type="name"
                      name="Member 2 Name"
                      placeholder="Member 2 Name"
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
                      required
                      pattern="[1-9]{1}[0-9]{9}"
                      maxlength="10"
                      onChange={handleChange}
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
                      placeholder="Transaction Id"
                      onChange={handleChange}
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

export default Register
