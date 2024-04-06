import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Effect from "./components/useEffect/Effect";
import UseForwardRef from "./components/UseForwardRef";
import UseContext from "./components/UseContext/UseContext";

const AppTest = () => {
  return (
    <>
      {/* <Effect /> */}
      {/* <UseForwardRef /> */}
      <div>
        <UseContext />
      </div>
    </>
  );
};

export default AppTest;
