import React, { Component } from 'react';

import style from './App.module.css'
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <>
        <div className={style.App}>Hello World</div>

        <Header />
        <Slider />
        <Footer />

      </>
    );
    
  }
}

export default App;
