import React from 'react'
import './Speaker.css'

const Speaker = () => {
  return (
    <section id="speaker">
      <h1>Meet our Astonishing speakers</h1>
      <div class="container1">
        <div class="box">
          <div class="imgBox">
            <img src="./images/Speaker1.jpg" alt="" />
          </div>
          <div class="content">
            <h2>
              Shridhar Mankar
              <br />
              <span>A YouTuber (5 Minute Engineering 440k+ Subscribers)</span>
            </h2>
          </div>
        </div>
        <div class="box">
          <div class="imgBox">
            <img src="./images/Speaker2.jpg" alt="" />
          </div>
          <div class="content">
            <h2>
              Manjul Solanke
              <br />
              <span>
                DevOps Engineer| CK A,AD,S |K8s expert|SRE|Multi-Cloud|
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speaker
