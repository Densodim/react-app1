import style from "./style.module.css";
import Container from "../Container";
import Heading from "../Heading";

const Slider = () => {
  return (
    <>
      <section className={style.section}>
        <div className={style.slider}>
          <Container className={style.sliderContent}>
            <Heading />
            <div className={style.call}>
              <button className={style.button}>Wow</button>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Slider;
