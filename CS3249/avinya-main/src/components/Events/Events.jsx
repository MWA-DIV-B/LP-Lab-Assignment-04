import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Events.css'
import Round1 from '../Rounds/Round1'
import Round2 from '../Rounds/Round2'
import Round3 from '../Rounds/Round3'
import Round4 from '../Rounds/Round4'

const Events = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <>
      <div className="event-main">
        <div className="event-title">
          <p>Event </p>
          <br></br>
          <p>The Code Olympics</p>
        </div>
        <div className="event-flex1">
          <Round1 />
          <Round2 />
        </div>
        <div className="event-flex2">
          <Round3 />
          <Round4 />
        </div>
      </div>
    </>
  )
}

export default Events
