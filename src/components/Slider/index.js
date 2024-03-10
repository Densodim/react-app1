import style from "./style.module.scss";
import Container from "../Container";
import Heading from "../Heading";
import Text from "../Text";
import { useState } from "react";
import Clock from "../../Clock";
import Button from "../Button/Button";

function Greeting() {
  return (
    <>
      <div>
        <h2>hello</h2>
      </div>
    </>
  )
}

function Bye() {
  return (
    <>
      <div>
        <h2>bye</h2>
      </div>
    </>
  )
}


const Slider = () => {
  const [state, setState] = useState(true);

  const handleClick = () => {
    setState(!state);
  };
  // let component;

  // if (state) {
  //   component = <Bye />;
  // } else {
  //   component = <Greeting />;
  // }
  // if (!state) {
  //   return <Greeting />;
  // }

  return (
    <>
      <section className={style.section}>
        <div className={style.slider}>
          <Container className={style.sliderContent}>
            <Heading />
            <Text level={2}>
              {state && <Clock />}
              {/* {component} */}
            </Text>
            <div className={style.call}>
              <button className={style.button} onClick={handleClick}>
                <Button 
                active={state}
                title={state ? "Bye" : "Hello"}
                />
              </button>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Slider;
