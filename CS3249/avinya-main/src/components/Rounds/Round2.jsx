import React from 'react'

const Round2 = () => {
  return (
    <>
      <div className="about">
        <div class="card2">
          <div class="card__inner">
            <div class="card__face card__face--front">
              <img src="./images/stage2.png" />
              <h2>
                Round 2:
                <br />
                <br></br> Break The Code
              </h2>
            </div>
            <div class="card__face card__face--back">
              <div class="card__content">
                <div class="card__header">
                  <img src="./images/logo.png" alt="AA" class="pp" />
                </div>
                <div class="card__body">
                  <p>
                    <div className="benefits">Round 2:- (23rd March)</div>
                    <br />
                    <ol className="round-rules">
                      <li>Round 2 will be commencing at 12 pm.</li>
                      <li>
                        You will be given code in following languages to Debug
                        (C, C++, python, java){' '}
                      </li>
                      <li>Second round will be of 1:30 hour</li>
                      <li>
                        Points will be given on the basis of errors resolved
                      </li>
                      <li>
                        Type of error resolved and time taken to debug both will
                        be considered while evaluation{' '}
                      </li>
                      <li>
                        If the participant is not comfortable with the language
                        chosen by them can change the language but the points
                        will be deducted for the same.
                      </li>
                      <li>
                        Above rule will be considered only for first 30 minutes.
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

export default Round2
