import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import './Modal.css'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.11,
      type: 'spring',
      damping: 25,
      stiffness: 100,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

const FormModal = ({ handleClose, text }) => {
  return (
    <>
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => {
            e.stopPropagation()
          }}
          className="modal orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>Registered Succesfully !!</h2>

          <button className="btn-grad1" onClick={handleClose}>
            Close
          </button>
        </motion.div>
      </Backdrop>
    </>
  )
}

export default FormModal
