import React, { Component } from 'react';
import NavBar from './NavBar';
import MainTop from './MainTop';
import Videos from './Videos';
import PressRelease from './PressRelease';
import Footer from './Footer';
import About from './About';
import Sponsors from './Sponsors';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <MainTop />
        <About />
        <Videos />
        <PressRelease />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}