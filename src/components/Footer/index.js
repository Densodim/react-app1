import Container from "../Container";
import style from "./style.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={style.root}>
        <Container>
          <div className={style.footerWrap}>
            Coded with
            <span className={style.heart}></span>
            by You
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
