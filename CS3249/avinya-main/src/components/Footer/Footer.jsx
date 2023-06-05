import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <section class="contact-area" id="contact">
        <div class="container2">
          <div class="row1">
            <div class="contact-content text-center">
              <a href="#">
                <img src="./images/logo1.png" alt="logo" />
              </a>
              <p>Department of Computer Engineering JSPM's RSCOE </p>
              <div class="hr"></div>
              <h6>
                JSPM Rajarshi shahu college of engineering , Tathawade, Service
                Rd, Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033
              </h6>
              <h6>
                Param Pawar: +91 89560 49304<span>|</span>
                <br /> Pratiksha Patil: +91 72188 66759
              </h6>
              <div className="footer-social-icon">
                <span></span>
                <a
                  href="https://instagram.com/avinya_2023?igshid=ZDdkNTZiNTM="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./images/insta.png" alt="" />
                </a>

                <a
                  href="https://discord.gg/W9v9bWzE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./images/discord.png" alt="" />
                </a>
              </div>
              <div className="developer">
                <p>
                  {' '}
                  Developed with ❤️ By{' '}
                  <a
                    href="https://www.linkedin.com/in/utkarsh-jaulkar/"
                    target="_blank"
                  >
                    Utkarsh Jaulkar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>
          Copyright &copy; {new Date().getFullYear()} <span></span>
          <img src="./images/logo1.png" alt="logo" /> All Rights Reserved.
        </p>
      </footer>
    </>
  )
}

export default Footer
