import React, { Component } from 'react';
import './Header.css';
import Curve from '../../assets/img/curve.svg';

class Header extends Component {

  render() {
    return (
      <header>
        <h3>Task App</h3>
        <img src={Curve} className="curve" alt="curve"/>
      </header>
    );
  }
}

export default Header;