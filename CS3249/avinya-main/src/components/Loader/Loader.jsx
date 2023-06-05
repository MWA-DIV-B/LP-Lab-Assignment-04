import React, { useState, useEffect } from 'react'
// import logo from './logo.svg'
import './Loader.css'

function Loader() {
  const [loadingPercent, setLoadingPercent] = useState(0)
  const colors = ['#FFC312', '#C4E538', '#12CBC4']

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercent((prevPercent) => prevPercent + 1)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const getSpinnerColor = () => {
    const index = Math.floor(loadingPercent / 33.33)
    return colors[index]
  }

  return (
    <div className="spinner-container">
      <div className="spinner">
        <div
          className="spinner-color"
          style={{ backgroundColor: getSpinnerColor() }}
        ></div>
        <div
          className="spinner-color"
          style={{ backgroundColor: getSpinnerColor() }}
        ></div>
        <div
          className="spinner-color"
          style={{ backgroundColor: getSpinnerColor() }}
        ></div>
      </div>
      <div
        className="loading-bar"
        style={{ width: `${loadingPercent}%` }}
      ></div>
      <img src="./images/logo.png" className="logo3" alt="logo" />
      <p className="loading-percent">{loadingPercent}%</p>
    </div>
  )
}

export default Loader
