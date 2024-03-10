import style from "./Biography.module.scss";
import PropsType from "prop-types";
import { BIO } from "../Bio";
import Container from "../../Container";
import Text from "../../Text";

const Biography = ({ id }) => {
  const onBackClick = () => {};
  console.log("BIO", BIO[id]);
  return (
    <>
      <div className={style.root}>
        <Container>
          {BIO[id].map((item) => {
            switch (item.type) {
              case "h1":
                return <Text level={1}>{item.text}</Text>;
              case "h2":
                return <Text level={2}>{item.text}</Text>;
              case "paragraph":
                return <Text>{item.text}</Text>;
              case "img":
                return (
                  <div className={style.imgWrapper}>
                    <img src={item.src} alt="image" />
                  </div>
                );
              default:
                return <Text>{item.text}</Text>;
            }
          })}
        </Container>
      </div>
    </>
  );
};

Biography.propTypes = {
  id: PropsType.number,
};

export default Biography;
