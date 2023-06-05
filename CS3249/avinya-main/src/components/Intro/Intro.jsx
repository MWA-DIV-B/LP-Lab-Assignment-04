import React from 'react'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './Intro.css'

const Intro = () => {
  const [isMobileView, setIsMobileView] = useState(false)

  // Check the screen size and update the state
  function handleResize() {
    setIsMobileView(window.innerWidth <= 768) // Change 768 to your desired breakpoint
  }

  // Add a resize listener to update the state when the screen size changes
  window.addEventListener('resize', handleResize)
  return (
    <>
      <div className="intro-main">
        <div className="intro-logo">
          {isMobileView ? (
            <img src="./images/model2.gif" />
          ) : (
            <Spline scene="https://prod.spline.design/hHdAjRRp1WGxJoBw/scene.splinecode" />
          )}
        </div>
        <div className="intro-info">
          <h1>What is Avinya ?</h1>
          <p className="des">
            AVINYA ~ derived from the Sanskrit language meaning 'Innovation' is
            the process of creating new ideas, products, or services that
            provide value to people and society. <br />
            <br />
            We are pleased to present to you a technical event aimed at bringing
            together experts, practitioners, enthusiasts, and novices in the
            field of computers to share knowledge, discuss innovations, and
            network with like-minded individuals.
          </p>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <motion.button
              className="reg-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Register
            </motion.button>{' '}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Intro
