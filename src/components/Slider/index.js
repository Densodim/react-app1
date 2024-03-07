import style from "./style.module.scss";
import Container from "../Container";
import Heading from "../Heading";
import Text from "../Text";
import { useState } from "react";

const Slider = () => {
  const [state, setState] = useState(1);

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <>
      <section className={style.section}>
        <div className={style.slider}>
          <Container className={style.sliderContent}>
            <Heading />
            <Text level={2}>
              {state}
            </Text>
            <div className={style.call}>
              <button className={style.button} onClick={handleClick}>Wow</button>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Slider;
