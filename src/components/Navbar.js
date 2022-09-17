import React, { Component } from 'react'
import farmer from '../farmer.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-white flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Decentralized Investment
        </a>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <div id="account">{this.props.account}</div>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
