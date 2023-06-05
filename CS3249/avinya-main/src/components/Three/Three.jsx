import React from 'react'
import Spline from '@splinetool/react-spline'
import { useState } from 'react'
import 'animate.css'

import './Three.css'

const Three = () => {
  const [isMobileView, setIsMobileView] = useState(false)

  // Check the screen size and update the state
  function handleResize() {
    setIsMobileView(window.innerWidth <= 768) // Change 768 to your desired breakpoint
  }

  // Add a resize listener to update the state when the screen size changes
  window.addEventListener('resize', handleResize)

  return (
    <>
      <div className="three-flex">
        <div className="three-title animate__animated animate__backInDown">
          <p>
            Department of Computer Engineering <span /> <span />
            <br />
            Jspm's RSCOE <span />
            <br />
            Brings You
          </p>
          {/* <p>
            <img src="./images/logo2.png" />
          </p> */}
        </div>
        <div className="three-main">
          {isMobileView ? (
            <img src="./images/model.gif" />
          ) : (
            <Spline scene="https://prod.spline.design/VwQC3wZYw-04IV7B/scene.splinecode" />
          )}
        </div>
      </div>
    </>
  )
}

export default Three
