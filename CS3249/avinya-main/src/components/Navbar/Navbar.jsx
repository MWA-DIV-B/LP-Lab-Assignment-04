import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react'
import './Navbar.css'
class Navbar extends Component {
  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="logo">
          <Link to="/">
            <img src="./images/logo1.png" alt="" />
          </Link>
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <Link className="nav-links" to="/">
            <li>
              <i className="fa-solid fa-home"></i>
              Home
            </li>
          </Link>
          <Link className="nav-links" to="/register">
            <li>
              <i className="fa-solid fa-user"></i>
              Register
            </li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar
