import { useParams } from "react-router-dom";
import PropsType from "prop-types";
import style from "./Biography.module.scss";
import { BIO } from "../Bio";
import Container from "../../Container";
import Text from "../../Text";
import Button from "../../Button/Button";
import Layout from "../../Layout/Layout";



const Biography = () => {
const {id} = useParams();
console.log(id);

  return (
    <>
      <div className={style.root}>
        <Container>
          {BIO[id].map((item, index) => {
            switch (item.type) {
              case "h1":
                return (
                  <Text level={1} key={index}>
                    {item.text}
                  </Text>
                );
              case "h2":
                return (
                  <Text level={2} key={index}>
                    {item.text}
                  </Text>
                );
              case "paragraph":
                return (
                  <Text level={4} key={index}>
                    {item.text}
                  </Text>
                );
              case "img":
                return (
                  <div className={style.imgWrapper} key={index}>
                    <img src={item.src} alt="image" />
                  </div>
                );
              default:
                return (
                  <Text level={5} key={index}>
                    {item.text}
                  </Text>
                );
            }
          })}
        </Container>
      </div>
    </>
  );
};

Biography.propType = {
  id: PropsType.number,
};

export default Biography;
