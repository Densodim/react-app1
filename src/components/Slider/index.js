import style from "./style.module.scss";
import Container from "../Container";
import Heading from "../Heading";
import Text from "../Text";
import { useState } from "react";
import Clock from "../../Clock";
import Button from "../Button/Button";

import {useSelector, useDispatch} from 'react-redux'; // counterValueSelector from counterSlice reducer
import { counterValueSelector } from "../../store/counterSlice";
import { increment, decrement, incrementByAmount } from "../../store/counterSlice";


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

  const counterValue = useSelector(counterValueSelector);//counterValueSelector from counterSlice reducer

  const dispatch = useDispatch(); // dispatch increment and decrement action from counterSlice reducer 

  const handleClickAmount = () => {
    dispatch(incrementByAmount(10)); // {count: 10} 
  }

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
            <Text level={3}>counter Value {counterValue}</Text>
            <Text level={2}>
              {state && <Clock />}
              {/* {component} */}
            </Text>
            <div className={style.call}>
                <Button active={state}>Wow </Button>          
            </div>
            <div>
              <Button
                onClick={() => {
                  dispatch(increment());
                }}
              >
                +
              </Button>
              <Button
                onClick={() => {
                  dispatch(decrement());
                }}
              >
                -
              </Button>
              <Button onClick={handleClickAmount}>
                Click
              </Button>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Slider;
