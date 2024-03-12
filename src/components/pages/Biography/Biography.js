import style from "./Biography.module.scss";
import PropsType from "prop-types";
import { BIO } from "../Bio";
import Container from "../../Container";
import Text from "../../Text";
import Button from "../../Button/Button";

const Biography = ({ id, onBackClick }) => {
  const handleOnClick = () => {
    onBackClick && onBackClick();
  };
  // console.log("BIO", BIO[id]);
  return (
    <>
      <div className={style.root}>
        <Container>
          <div className={style.btmWrap}>
              <Button color={"secondary"} onClick={handleOnClick}>Go Back</Button>
          </div>
          {BIO[id].map((item) => {
            switch (item.type) {
              case "h1":
                return <Text level={1}>{item.text}</Text>;
              case "h2":
                return <Text level={2}>{item.text}</Text>;
              case "paragraph":
                return <Text level={4}>{item.text}</Text>;
              case "img":
                return (
                  <div className={style.imgWrapper}>
                    <img src={item.src} alt="image" />
                  </div>
                );
              default:
                return <Text level={5}>{item.text}</Text>;
                
            }
          })}
        </Container>
      </div>
    </>
  );
};

Biography.propTypes = {
  onBackClick: PropsType.func,
  id: PropsType.number,
};

export default Biography;
