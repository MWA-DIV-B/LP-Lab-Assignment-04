import React from 'react'
import Events from '../Events/Events'
import Footer from '../Footer/Footer'
import Intro from '../Intro/Intro'
import Navbar from '../Navbar/Navbar'
import Speaker from '../Speaker/Speaker'
import Three from '../Three/Three'

const Home = () => {
  return (
    <>
      <Navbar />
      <Three />
      <Intro />
      <Events />
      <Speaker />
      <Footer />
    </>
  )
}

export default Home
