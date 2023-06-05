import React from 'react'

const Round4 = () => {
  return (
    <>
      <div className="about">
        <div class="card4">
          <div class="card__inner">
            <div class="card__face card__face--front">
              <img src="./images/stage4.png" />
              <h2>
                Round 4:
                <br />
                <br></br> The Code Combat
              </h2>
            </div>
            <div class="card__face card__face--back">
              <div class="card__content">
                <div class="card__header">
                  <img src="./images/logo.png" alt="AA" class="pp" />
                </div>
                <div class="card__body">
                  <p>
                    <div className="benefits">Round 4:- (24th March)</div>
                    <br />
                    <ol className="round-rules">
                      <li>Round 4 will be commencing at 1 pm.</li>
                      <li>This round will be conducted on Hackerrank</li>
                      <li>
                        Round will last for 2:00 hours (1:00pm to 03:00am)
                      </li>
                      <li>It will consist of 4 questions</li>
                      <li>
                        Time and number of questions solved will be the factor
                        for evaluation{' '}
                      </li>
                      <li>
                        Participants will be judged according to no. Of test
                        cases passed
                      </li>
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

export default Round4
