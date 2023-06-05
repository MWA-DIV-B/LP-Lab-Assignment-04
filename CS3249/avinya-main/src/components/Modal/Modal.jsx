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

const Modal = ({ handleClose, text }) => {
  return (
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
        <h2>Rules</h2>
        <ul>
          <h3 className="day">Day 1</h3>
          <li className="round">
            Round 1: Trial By Travia
            <ul className="round-rules">
              <li>Round one will start at 9 am. </li>
              <li>Quiz will be conducted on Kahoot platform </li>
              <li>The first round will be of 45 minutes </li>
              <li>Both the participants have to participate in the quiz </li>
              <li>There will be no negative marking </li>
              <li>Time will be one of the factors while evaluation </li>
              <li>Quiz will consist of 45 -50 question </li>
              <li>Each question will carry two marks </li>
            </ul>
          </li>
          <br />
          <li className="round">
            Round 2: Break the Code
            <ul className="round-rules">
              <li>Round 2 will be commencing at 12 pm.</li>
              <li>
                You can choose the language of your choice to debug (C, C++,
                python, java){' '}
              </li>
              <li>Second round will be of 1:30 hour</li>
              <li>Points will be given on the basis of errors resolved</li>
              <li>
                Type of error resolved and time taken to debug both will be
                considered while evaluation{' '}
              </li>
              <li>
                If the participant is not comfortable with the language chosen
                by them can change the language but the points will be deducted
                for the same.
              </li>
              <li>Above rule will be considered only for first 30 minutes.</li>
            </ul>
          </li>
          <br />
          <li className="round">
            Round 3: ProtoX
            <ul className="round-rules">
              <li>Round 3 will be commencing at 3:00 pm.</li>
              <li>This round will last for 3:00 hours</li>
              <li>
                In this round participant will have to design a prototype only
                (You have to build the web or android app whose basic design
                will be given to you. <br /> All the assets will be provided to
                you.)
              </li>
              <li>
                Participants can choose the platform according to their
                convenience{' '}
              </li>
              <li>
                Topic for the designing will be given on the day of competition{' '}
              </li>
              <li>
                Images required for your design can be downloaded within first
                half and hour
              </li>
              <li>Topic cannot be changed once chosen </li>
              <li>
                The choice will be given to the participant whether to design a
                website or an android application{' '}
              </li>
              <li>You are advised to bring your own laptops for this round</li>
            </ul>
          </li>
          <br />

          <h3 className="day">Day 2</h3>
          <li className="round">
            Round 4: Code Combat
            <ul className="round-rules">
              <li>Round 4 will be commencing at 9 am.</li>
              <li>This round will be conducted on Hackerrank</li>
              <li>Round will last for 2:00 hours (9:am to 11:00am)</li>
              <li>It will consist of 3 questions</li>
              <li>
                Time and number of questions solved will be the factor for
                evaluation{' '}
              </li>
              <li>
                Participants will be judged according to no. Of test cases
                passed
              </li>
            </ul>
          </li>
        </ul>

        <button className="btn-grad1" onClick={handleClose}>
          Close
        </button>
      </motion.div>
    </Backdrop>
  )
}

export default Modal
