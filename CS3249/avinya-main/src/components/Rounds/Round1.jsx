import React from 'react'
import './Round.css'

const Round1 = () => {
  return (
    <>
      <div className="about">
        <div class="card1">
          <div class="card__inner">
            <div class="card__face card__face--front">
              <img src="./images/stage1.png" />
              <h2>
                Round 1:
                <br />
                <br></br> Trial By Trivia<br></br>
              </h2>
            </div>
            <div class="card__face card__face--back">
              <div class="card__content">
                <div class="card__header">
                  <img src="./images/logo.png" alt="AA" class="pp" />
                </div>
                <div class="card__body">
                  <p>
                    <div className="benefits">Round 1:- (23rd March)</div>
                    <br />
                    <ol className="round-rules">
                      <li>Round one will start at 9 am. </li>
                      <li>Quiz will be conducted on Kahoot platform </li>
                      <li>The first round will be of 45 minutes </li>
                      <li>
                        Both the participants have to participate in the quiz{' '}
                      </li>
                      <li>There will be no negative marking </li>
                      <li>Time will be one of the factors while evaluation </li>
                      <li>Quiz will consist of 45 -50 question </li>
                      <li>Each question will carry two marks </li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Round1
