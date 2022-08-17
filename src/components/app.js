import React, { Component } from 'react';
import NavBar from './NavBar';
import MainTop from './MainTop';
import Bottom from './Bottom';
import BottomLinks from './BottomLinks';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <MainTop />
        <Bottom />
        <BottomLinks />
        <Footer />
      </div>
    );
  }
}