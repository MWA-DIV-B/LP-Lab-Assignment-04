import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import Home from './Home'

const MainHome = () => {
  const [loading, setLoading] = useState(true)
  const [splineDesignLoaded, setSplineDesignLoaded] = useState(false)

  useEffect(() => {
    // Simulating a delay for the spline design to load
    setTimeout(() => {
      setSplineDesignLoaded(true)
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <>
      {loading && <Loader />}
      {!loading && <Home />}
    </>
  )
}

export default MainHome
