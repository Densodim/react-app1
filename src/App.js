import React, { Component } from "react";

import style from "./App.module.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Text from "./components/Text";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Text level={1}>
        <span>Заголовок, но только сверху</span>
        </Text>
        <Slider />
        <Text
          level={1}
          // element={div}
          className={style.App}
          strong={true}
          italic={true}
          disabled={true}
        >
          <span>Заголовок, но только снизу</span>
        </Text>
        <Footer />
      </>
    );
  }
}

export default App;
