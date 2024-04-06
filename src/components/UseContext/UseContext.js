import React, { useContext, useState } from "react";
import style from "./UseContext.module.scss";

const getThemeDark = (theme = "light") => ({
  backgroundColor: theme === "dark" ? "black" : "white",
  color: theme === "dark" ? "white" : "black",
  borderColor: "#000",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "5px",
  padding: "25px",
});

const ThemeContext = React.createContext("null"); // default value

const Card = () => {
  const contex = useContext(ThemeContext);
  console.log("theme", contex);
  return (
    <>
      <div style={getThemeDark(contex.theme)}>Card</div>
      <button onClick={() => contex.setTheme()}>
        Change theme Card
      </button>
    </>
  );
};

const About = () => {
  const contex = useContext(ThemeContext);
  // console.log("theme", contex);
  return (
    <>
      <div style={getThemeDark(contex.theme)}>About</div>
      <Card/>
    </>
  );
};

const UseContext = (props) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme: () => setTheme((s) => (s === "dark" ? "light" : "dark"))
    }}>
      <>
        <div className={style.root}>
          <button
            onClick={() => setTheme((s) => (s === "dark" ? "light" : "dark"))}
          >
            Change Theme
          </button>
          <About theme={theme} />
          
        </div>
      </>
    </ThemeContext.Provider>
  );
};

export default UseContext;
