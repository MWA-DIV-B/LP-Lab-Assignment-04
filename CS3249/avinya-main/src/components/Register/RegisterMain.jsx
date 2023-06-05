import React from 'react'
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import 'animate.css'
import './RegisterMain.css'

const RegisterMain = () => {
  return (
    <>
      <Navbar />
      <div className="registration-details animate__animated animate__bounceIn">
        <div className="details">
          <h2> Registration fee for Contest:- ₹100/- per group</h2> <br />
          <h2>Registration fee for Guest lecture:- ₹50/- per head</h2>
        </div>
        <div className="register-links">
          <div className="register-option">
            <p>
              To register for Guest Lecture
              <br /> By Shridhar Mankar (5 minutes Engineering)
            </p>
            <NavLink to="/registerS" style={{ textDecoration: 'none' }}>
              <motion.button
                className="s-register"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Click here
              </motion.button>
            </NavLink>
          </div>
          <div className="register-option">
            <p> To register for Contest (The Code Olympics)</p>
            <NavLink to="/registerE" style={{ textDecoration: 'none' }}>
              <motion.button
                className="s-register"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Click here
              </motion.button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterMain
